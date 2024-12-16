$(document).ready(function () {
	const classes = ['new', 'hot', 'up', 'down', 'hyphen'];
	const classCounts = {
		new: 0,
		hot: 0,
		up: 0,
		down: 0,
		hyphen: 0
	};
	const maxCount = 2;

	/* 아이콘 랜덤 */
	function getRandomClass() {
		let randomClass;
		do {
			randomClass = classes[Math.floor(Math.random() * classes.length)];
		} while (classCounts[randomClass] >= maxCount);
		return randomClass;
	}

	/* 숫자 랜덤 */
	function getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$('ul li').find('.random').each(function () {
		const randomClass = getRandomClass();
		classCounts[randomClass]++;

		/* 랜덤 아이콘 up || dowm인 경우 */
		const numberSpan = (randomClass === 'up' || randomClass === 'down') ?
			`<span class="number">${getRandomNumber(10, 100)}</span>` :
			'';
		$(this).addClass(randomClass).append(numberSpan);
	});
});