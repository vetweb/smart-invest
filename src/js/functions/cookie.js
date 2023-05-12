(function () {
	const cookieBtn = document.querySelector('.js-cookie-btn-trigger');
	const cookieContainer = document.querySelector('.js-cookie-popup');

	if(cookieBtn) {
		cookieBtn.addEventListener('click', () => {
			cookieContainer.classList.add('hide');
		})
	}

})();
