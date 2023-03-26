import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

  const btnModalTrigger = document.querySelectorAll('.js-open-modal-feedback');
  const modal = document.querySelector('.modal');
  const modalSuccess = document.querySelector('.modal--success');
  const modalCloseTrigger = document.querySelectorAll('.js-modal-close');

  btnModalTrigger.forEach((el) => {
    el.addEventListener('click', openModal)
  })

  function openModal () {
    modal.classList.add('open-modal');
    disableScroll();
  }

  export const openModalSuccess = () => {
    modal.classList.remove('open-modal');
    modalSuccess.classList.add('open-modal');
    disableScroll();
  }

  function closeModal () {
    modalCloseTrigger.forEach((el) => {
      el.addEventListener('click', () =>{
        modal.classList.remove('open-modal');
        modalSuccess.classList.remove('open-modal');
        enableScroll();
      })
    })
  }

  closeModal();
