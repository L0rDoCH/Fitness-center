import '../vendor/swiper.js';

let coachSlider;

const startSliders = () => {
  if (document.querySelector('.coachs__slider')) {
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
};

export {coachSlider, startSliders};
