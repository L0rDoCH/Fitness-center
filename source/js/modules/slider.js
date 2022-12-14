import '../vendor/swiper.js';

let coachSlider;
let reviewsSlider;

const addFocusOnSlide = () => {
  const slider = document.querySelector('.coachs__slider');
  const slides = slider.querySelectorAll('.swiper-slide');

  slides.forEach((slide) => {
    if (!slide.classList.contains('swiper-slide-visible')) {
      slide.childNodes.forEach((child) => {
        child.childNodes.forEach((element) => {
          if (element.nodeName === 'DIV') {
            if (element.hasAttribute('tabindex')) {
              element.removeAttribute('tabindex');
            }
          }
        });
      });
    } else {
      slide.childNodes.forEach((child) => {
        child.childNodes.forEach((element) => {
          if (element.nodeName === 'DIV') {
            if (!element.hasAttribute('tabindex')) {
              element.setAttribute('tabindex', 0);
            }
          }
        });
      });
    }
  });
};

const startSliders = () => {
  if (document.querySelector('.coachs__slider')) {
    const coachsWrapper = document.querySelector('.coachs__swiper-wrapper');
    const coachsButtonPrev = document.querySelector('.coachs__slider-button-prev');
    const coachsButtonNext = document.querySelector('.coachs__slider-button-next');

    coachsWrapper.classList.add('swiper-wrapper');
    coachsWrapper.classList.remove('coachs__swiper-wrapper');
    coachsButtonPrev.style.display = 'block';
    coachsButtonNext.style.display = 'block';

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

    coachSlider.on('slideChange', () => {
      addFocusOnSlide();
    });

    addFocusOnSlide();
  }

  if (document.querySelector('.reviews__slider')) {
    const reviewsWrapper = document.querySelector('.reviews__swiper-wrapper');
    const reviewsButtonPrev = document.querySelector('.reviews__slider-button-prev');
    const reviewsButtonNext = document.querySelector('.reviews__slider-button-next');

    reviewsWrapper.classList.add('swiper-wrapper');
    reviewsWrapper.classList.remove('reviews__swiper-wrapper');
    reviewsButtonPrev.style.display = 'block';
    reviewsButtonNext.style.display = 'block';


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
