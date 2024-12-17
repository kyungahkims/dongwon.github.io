$(document).ready(function () {
	const $balls = $('.ball');
	const $baskets = $('.basket');

	$balls.each(function (index) {
		$(this).attr('id', `ball-${index}`);
	});

	$balls.attr('draggable', true);

	$balls.on('dragstart', function (event) {
		event.originalEvent.dataTransfer.setData('text/plain', $(this).attr('id'));
	});

	$baskets.on('dragover', function (event) {
		event.preventDefault();
	});

	$baskets.on('drop', function (event) {
		event.preventDefault();
		const ballId = event.originalEvent.dataTransfer.getData('text/plain');
		const $ball = $(`#${ballId}`);
		if ($ball.length) {
			$(this).append($ball);
			setTimeout(function () {
				window.location.href = "https://www.naver.com/";
			}, 2000);
		}
	});
});