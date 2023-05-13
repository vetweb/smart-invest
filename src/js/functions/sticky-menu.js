(function () {
	const md1024max = '(max-width: 1024px)';
	const mediaQuery = window.matchMedia(md1024max);

	if(mediaQuery.matches) {
		let menu = document.querySelector('.header');

		let offset = menu.offsetHeight;
		window.addEventListener('scroll', function () {
			if (window.scrollY > offset - 70) {
				menu.classList.add("sticky");
			} else if (window.scrollY < offset - 70) {
				menu.classList.remove("sticky");
			}
		})
	}
})();
