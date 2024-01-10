// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
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
  spaceBetween: 16,

  slidesPerView: 1.2,

  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide'
  },

  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 3.25,
      spaceBetween: 32,
      navigation: {
        enabled: true
      }
    }
  }
});

const btnNext = document.querySelector('.swiper-button-next');
const btnPrev = document.querySelector('.swiper-button-prev');

btnNext.addEventListener('click', () => swiper.slideNext());
btnPrev.addEventListener('click', () => swiper.slidePrev());
