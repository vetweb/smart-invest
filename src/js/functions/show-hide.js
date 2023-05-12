(function () {
	const content = document.querySelector('.js-content');
	const linkTrigger = document.querySelector('.js-link-trigger-container');

	if (linkTrigger) {
		linkTrigger.addEventListener('click', () => {
			content.classList.toggle('show-container');
			linkTrigger.classList.toggle('show-link');
		})
	}
})();