(function () {
	// Variables
	const formBoxes = document.querySelectorAll('.form-box');

	formBoxes.forEach((formBox) => {
		const formBoxElements = formBox.querySelectorAll('.form-box__input');

		formBoxElements.forEach((elem) => {
			elem.addEventListener('focus', (activateInput));
			elem.addEventListener('blur', (deActivateInput));
		})
	})

	function activateInput(e) {
		e.target.parentElement.classList.add('active');
	}

	function deActivateInput(e) {
		if (e.target.value === '') {
			e.target.parentElement.classList.remove('active');
		}
	}

})();
