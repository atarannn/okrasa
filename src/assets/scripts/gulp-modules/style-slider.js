var menu = ['Натуральні матеріали', 'Багато світла', 'Найвища якість'];

if (document.querySelector('.page__inner').classList.contains('en')) {
  var menu = ['Slide 1', 'Slide 2', 'Slide 3'];
}

const slider2 = new Swiper('.section-6-slider', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '<svg class="animation-line" width="800" height="2" viewBox="0 0 800 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="2" x2="800" y2="2" stroke-width="5"></line><line data-line="" x1="0" x2="800" y1="2" y2="2" stroke-width="5" data-svg-origin="0 2" style="transition: none 0s ease 0s;"></line></svg></span>';
    },
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  preloadImages: false,
  lazy: true,
  speed: 1000,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: true,
  //   reverseDirection: false,
  //   waitForTransition: true,
  // },
  watchSlidesVisibility: true,
  on: {
    init: (e) => {
      const delay = e.params.autoplay.delay / 1000;
      gsap.fromTo('[data-line]', { scaleX: 0 }, { scaleX: 1, duration: delay, transformOrigin: '0 0' });
    },
  },
});
