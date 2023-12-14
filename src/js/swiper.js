// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper1 = new Swiper('.swiper1', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  pagination: {
    dynamicBullets: true,
    dynamicMainBullets: 5,
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    enabled: false
  },

  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  spaceBetween: 12,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 1.2,

  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide'
  },

  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 24,
      navigation: {
        enabled: true
      }
    }
  }
});

const swiper2 = new Swiper('.swiper2', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    enabled: false
  },

  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  spaceBetween: 12,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 1.2,
  loop: true,
  loopAddBlankSlides: true,
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide'
  },

  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 24,
      navigation: {
        enabled: true
      }
    }
  }
});
console.log(swiper2.slides);

const btnNext = document.querySelectorAll('.swiper-button-next');
const btnPrev = document.querySelectorAll('.swiper-button-prev');

btnNext.forEach((btn) =>
  btn.addEventListener('click', (e) => e.target.parentNode.swiper.slideNext())
);
btnPrev.forEach((btn) =>
  btn.addEventListener('click', (e) => e.target.parentNode.swiper.slidePrev())
);
