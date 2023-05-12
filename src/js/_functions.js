// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from './functions/burger';
import { accordion } from './functions/accordion';
import { odometr } from './functions/odometr';
import { dropdownSelect } from './functions/dropdown-select';
import { form } from './functions/form';
import { modal } from './functions/modal';
import { showHhide } from './functions/show-hide';
import { cookie } from './functions/cookie';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

const md1025max = '(max-width: 1025px)';
const mediaQueryList = window.matchMedia(md1025max);
let swiperNews
let swiperRole

mediaQueryList.addEventListener('change', event => {
  if (event.matches) {
    console.log('swiperNews1', swiperNews);
    swiperNews = new Swiper('.js-news-slider', {
      spaceBetween: 16,
      slidesPerView: "auto",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    swiperRole = new Swiper('.js-role-list', {
      spaceBetween: 16,
      slidesPerView: "auto",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {

    swiperNews.destroy(true, true);
    swiperRole.destroy( true, true );
  }
})

const commandSlider = new Swiper('.js-command-slider', {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Подключение свайпера
import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

const swiper = new Swiper('.js-root-slider', {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 3400,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const swiper2 = new Swiper('.js-descr-project', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  }
});



// Подключение анимаций по скроллу
import AOS from 'aos';
AOS.init({
  duration: 1200
});

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

import { validateForms } from './functions/validate-forms';

const name = {
  ruleSelector: '.name',
  errorMessage: 'Name error',
  rules: [
    { rule: "minLength", value: 3 },
    { rule: "required" },
  ],
};
const phone = {
  ruleSelector: '.phone',
  errorMessage: 'email error',
  rules: [
    { rule: "minLength", value: 3 },
    { rule: "required" },
  ],
};
const rules1 = [name, phone];


const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.form-box__form', rules1, afterForm);
