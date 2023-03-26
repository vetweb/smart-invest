import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  const menuActiveClass = 'active'
  const burgerActiveClass = 'active'
  const ariaExpandedDataName = 'aria-expanded'
  const ariaLabelDataName = 'aria-label'
  const ariaLabelOpenText = 'Открыть меню'
  const ariaLabelCloseText = 'Закрыть меню'
  const menu = document?.querySelector('[data-menu]');
  const burger = document?.querySelector('[data-burger]');
  const menuItems = document?.querySelectorAll('.menu-modal__item');
  const menuParent = document?.querySelector('.menu-modal__list');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle(burgerActiveClass);
    menu?.classList.toggle(menuActiveClass);

    if (menu?.classList.contains(menuActiveClass)) {
      burger?.setAttribute(ariaExpandedDataName, 'true');
      burger?.setAttribute(ariaLabelDataName, ariaLabelCloseText);
      disableScroll();
    } else {
      burger?.setAttribute(ariaExpandedDataName, 'false');
      burger?.setAttribute(ariaLabelDataName, ariaLabelOpenText);
      enableScroll();
    }
  });


  const navclick = document.getElementsByClassName("menu-modal__link");
  const listMenu = document.querySelector(".menu-modal__list");
  for (var i = 0; i < navclick.length; i++) {
    navclick[i].onclick = function (e) {
      if(this.parentNode.classList.contains('menu-modal__item-submenu') === true) {
        e.preventDefault();
        if (this.parentNode.querySelector('.menu-modal__submenu').classList.contains('active-sub-menu')) {
          this.classList.remove('active');
          listMenu.classList.remove('active-list');
          this.parentNode.querySelector('.menu-modal__submenu').classList.remove('active-sub-menu');
        }
        else {
          try {
            // if an open element exists, close it first
            this.parentNode.parentNode.querySelector('.active-sub-menu').classList.remove('active-sub-menu');
            this.parentNode.parentNode.querySelector('.active').classList.remove('active');
          }
          catch (error){
            // Error occurs when no open elment exists, in that case: Do nothing
          }
          this.parentNode.querySelector('.menu-modal__submenu').classList.add('active-sub-menu');
          this.classList.add('active');
          listMenu.classList.add('active-list');
        }
      } else {
        enableScroll();
        burger?.classList.remove(burgerActiveClass);
        menu?.classList.remove(menuActiveClass);
      }
    }
  }
})();
