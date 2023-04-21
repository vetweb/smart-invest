(function(){
	const items = document.querySelectorAll(".accordion .accordion-item__header");
	const itemsAcc = document.querySelectorAll('.accordion-item');

	function toggleAccordion() {
		const itemToggle = this.getAttribute('aria-expanded');

		for (i = 0; i < itemsAcc.length; i++) {
			itemsAcc[i].classList.remove('active');
		}

		for (i = 0; i < items.length; i++) {
			items[i].setAttribute('aria-expanded', 'false');
		}

		if (itemToggle === 'false') {
			this.setAttribute('aria-expanded', 'true');
			this.parentElement.classList.add('active');
		}
	}

	items.forEach(item => item.addEventListener('click', toggleAccordion));
})();