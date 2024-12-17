$(document).ready(function () {

	$('.item').draggable({
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

	$('.box').droppable({
		accept: ".item",
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
			$('.gift_title span').addClass('active').text('1등 선물세트, 품격을 더하다!');

			setTimeout(function () {
				window.location.href = "https://www.naver.com/";
			}, 2000);
		}
	});
});