(function () {
	let menu = document.querySelector('.header');

	let offset = menu.offsetHeight;
	window.addEventListener('scroll', function() {
		if (window.scrollY > offset - 70) {
			menu.classList.add("sticky");
		} else if (window.scrollY < offset) {
			menu.classList.remove("sticky");
		}
	})
})();
