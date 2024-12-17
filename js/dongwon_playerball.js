$(document).ready(function () {
	const $balls = $('.ball');
	const $baskets = $('.basket');

	$balls.draggable({
		revert: "invalid",
		cursor: "move",
		helper: "clone",
		start: function (event, ui) {
			$(this).addClass("dragging");
		},
		stop: function (event, ui) {
			$(this).removeClass("dragging");
		}
	});

	$baskets.droppable({
		accept: ".ball",
		drop: function (event, ui) {
			const $ballClone = ui.helper.clone();
			$ballClone.css({
				position: "absolute",
				top: "0",
				left: "0"
			}).appendTo($(this));
			ui.draggable.css({
				visibility: "hidden"
			});

			$(this).css('border', 'none');
			setTimeout(function () {
				// window.location.href = "https://www.naver.com/";
			}, 2000);
		}
	});
});