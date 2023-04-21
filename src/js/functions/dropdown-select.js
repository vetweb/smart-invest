(function(){
  // Variables
  const dropdown = document?.querySelector('.dropdown-select');
  const input = document.querySelector('.dropdown-select__input');
  const listOfOptions = document.querySelectorAll('.option');
  const body = document.body;
  let inputValue = ''; //Передать значение селекта

// Functions
  const toggleDropdown = (event) => {
    event.stopPropagation();
    dropdown.classList.toggle('opened');
  };

  const selectOption = (event) => {
    listOfOptions.forEach((option2) => {
      option2.classList.remove('active');
    });
    event.target.classList.add('active');
    input.value = event.currentTarget.textContent;
    inputValue = input.value;
    dropdown.classList.add('selected');
  };

  const closeDropdownFromOutside = () => {
    if (dropdown.classList.contains('opened')) {
      dropdown.classList.remove('opened');
    }
  };
// Event Listeners

  body.addEventListener('click', closeDropdownFromOutside);

  listOfOptions.forEach((option) => {
    option.addEventListener('click', selectOption);
  });

  if(dropdown) {
    dropdown.addEventListener('click', toggleDropdown);
  }
})();
