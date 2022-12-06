import '../vendor/swiper.js';

let coachSlider;
let reviewsSlider;

const startSliders = () => {
  if (document.querySelector('.coachs__slider')) {
    const coachsWrapper = document.querySelector('.coachs__swiper-wrapper');

    coachsWrapper.classList.add('swiper-wrapper');

    coachSlider = new window.Swiper('.coachs__slider', {
      speed: 400,
      navigation: {
        nextEl: '.coachs__slider-button-next',
        prevEl: '.coachs__slider-button-prev',
      },
      watchOverflow: true,
      loop: true,
      watchSlidesProgress: true,
      observer: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          centeredSlides: true,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          centeredSlides: false,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  }

  if (document.querySelector('.reviews__slider')) {
    const reviewsWrapper = document.querySelector('.reviews__swiper-wrapper');

    reviewsWrapper.classList.add('swiper-wrapper');

    coachSlider = new window.Swiper('.reviews__slider', {
      speed: 400,
      navigation: {
        nextEl: '.reviews__slider-button-next',
        prevEl: '.reviews__slider-button-prev',
      },
      watchOverflow: true,
    });
  }
};

export {coachSlider, reviewsSlider, startSliders};
