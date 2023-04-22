(function () {
	let el1 = document.querySelector('.odometer1');
	let el2 = document.querySelector('.odometer2');
	let el3 = document.querySelector('.odometer3');
	const achievBox = document.querySelector('.js-about-achiev-list');

	// какие-либо параметры
	const options = {
		rootMargin: '0px',
		threshold: [0, 0.2]
	};

	// callback-функция (возвратная функция)
	const trueCallback = function (entries, observer) {
		entries.forEach((entry) => {
			const {isIntersecting} = entry;
			if (el1) {
				if (isIntersecting) {
					el1.innerHTML = '12';
					el2.innerHTML = '8';
					el3.innerHTML = '57';
				}
			}
		});
	}

	const observer = new IntersectionObserver(trueCallback, options);
	observer.observe(achievBox);
})();
