var menu = ['01', '02', '03', '04'];

const slider = new Swiper('.section-1-slider', {
  loop: true,
  navigation: {
    nextEl: document.querySelector('[data-next-btn]'),
    prevEl: document.querySelector('[data-prev-btn]'),
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '<svg class="animation-line" width="450" height="6" viewBox="0 0 450 6" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="450" y2="6" stroke-width="5"></line><line data-white-line="" x1="0" x2="450" y1="0" y2="6" stroke-width="5" data-svg-origin="0 2" ></line></svg></span>';
    },
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  preloadImages: false,
  lazy: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  watchSlidesVisibility: true,
});
