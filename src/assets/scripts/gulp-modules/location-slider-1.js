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



window.addEventListener('DOMContentLoaded', () => {
  if (!document.documentElement.classList.contains('mobile')) return;

  const swiper = new Swiper('[data-location-section-2-mobile-slider]', {
    loop: false,
    speed: 1000,
    slidesPerView: 1.6,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination-mobile',
      clickable: true,
    },
  });
  window.addEventListener('DOMContentReloaded', () => {
    swiper.destroy();
  })
});

/**Section 7 mobile slider */
window.addEventListener('DOMContentLoaded', () => {
  if (!document.documentElement.classList.contains('mobile')) return;

  const wrapper = document.querySelector('.gallery-wrapper');

  wrapper.innerHTML = `
    <div class="swiper-wrapper">
      ${Array.from(wrapper.children).map(el => {

        el.classList.add('swiper-slide');
        return el.outerHTML;
      }).join('')}
    </div>
    <div class="swiper-pagination-mobile"></div>
  `;

  const swiper = new Swiper(wrapper, {
    loop: false,
    speed: 1000,
    // slidesPerView: 1.6,
    // spaceBetween: 20,
    pagination: {
      el: '.gallery-wrapper .swiper-pagination-mobile',
      clickable: true,
    },
  });
  // window.addEventListener('DOMContentReloaded', () => {
  //   swiper.destroy();
  // })
})