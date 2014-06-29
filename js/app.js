$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function() {
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show();
		$(".hadouken").animate(
				{"left": "800px"}, 
				500,
				function() {
					$(this).hide();
					$(this).css("left", "475px");
				}
			);
	})
	.mouseup(function() {
		$(".ryu-throwing").hide();
		$("ryu-ready").show();
	});
	$("body").keydown(function(event) {
		if (event.keyCode == 88) {
			$(".ryu-cool").show();
			$(".ryu-still").hide();
			$("ryu-ready").hide();
			$("rhy-throwing").hide();
		}
	})
	.keyup(function(event) {
		if (event.keyCode == 88) {
			$(".ryu-cool").hide();
			$(".ryu-still").show();
			$("ryu-ready").hide();
			$("rhy-throwing").hide();
		}	
	});
});
function playHadouken () {
	$("#hadouken-sound")[0].volune = 0.5;
	$("#hadouken-sound")[0].load()
	$("#hadouken-sound")[0].play();
}