const slider = new Swiper('.location-section-5-slider', {
  loop: false,
  navigation: {
    nextEl: document.querySelector('[data-next-btn]'),
    prevEl: document.querySelector('[data-prev-btn]'),
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  preloadImages: false,
  lazy: true,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  //   waitForTransition: false,
  // },
  watchSlidesVisibility: true,
});
