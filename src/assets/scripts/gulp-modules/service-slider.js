function serviceSlider() {
  var menu = ['На подвір’ї', 'В будинку', 'На території міста'];

  if (document.querySelector('.page__inner').classList.contains('en')) {
    var menu = ['Slide 1', 'Slide 2', 'Slide 3'];
  }

  const slider2 = new Swiper('.section-6-slider', {
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '<svg class="animation-line" width="550" height="2" viewBox="0 0 550 2" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="2" x2="550" y2="2" stroke-width="5"></line><line data-line="" x1="0" x2="550" y1="2" y2="2" stroke-width="5" data-svg-origin="0 2" style="transition: none 0s ease 0s;"></line></svg></span>';
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
}

serviceSlider();


function serviceMobileSlider() {
  mobileTabsScroller(document.querySelector('.section-6-slider .swiper-navigation-wrapper'));
  
  function mobileTabsScroller($container) {
    if (!document.documentElement.classList.contains('mobile')) return;
  
    const section6Navigation = $container;
    // const section6Navigation = document.querySelector('.section-6 .swiper-navigation-wrapper');
    section6Navigation.insertAdjacentHTML('afterend', `
      <div class="section-6-mobile-navigation-scroller">
        <svg data-section-6-mobile-scroll-prev width="29" height="46" viewBox="0 0 29 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="29" y="46" width="29" height="46" transform="rotate(-180 29 46)" fill="#71A700"/>
          <path d="M17 28L12 23L17 18" stroke="white" stroke-width="2"/>
        </svg>
        <svg data-section-6-mobile-scroll-next width="29" height="46" viewBox="0 0 29 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="29" height="46" fill="#71A700"/>
          <path d="M12 18L17 23L12 28" stroke="white" stroke-width="2"/>
        </svg>
      </div>
    `);
    checkLeftScrollEdge(section6Navigation.scrollLeft, section6Navigation.scrollLeft);
    document.body.addEventListener('click',function(evt){
      const target = evt.target.closest('[data-section-6-mobile-scroll-next]');
      if (!target) return;
      gsap.to(section6Navigation, {
        scrollLeft: section6Navigation.scrollLeft + 150,
        ease: 'power4.out'
      });
    });
    document.body.addEventListener('click',function(evt){
      const target = evt.target.closest('[data-section-6-mobile-scroll-prev]');
      if (!target) return;
      gsap.to(section6Navigation, {
        scrollLeft: section6Navigation.scrollLeft - 150,
        ease: 'power4.out'
      });
    });
    section6Navigation.addEventListener('scroll',function({ target }){
      checkLeftScrollEdge(target.scrollLeft, target.scrollLeft);
      checkRightScrollEdge(target.scrollLeft, target.scrollWidth);
    });
  
    function checkLeftScrollEdge(scrollValue, scrollWidth) {
      document.querySelectorAll('[data-section-6-mobile-scroll-prev]').forEach(el => {
        el.style.opacity = scrollValue === 0 ? 0 : 1;
      }) 
    }
    function checkRightScrollEdge(scrollValue, scrollWidth) {
      document.querySelectorAll('[data-section-6-mobile-scroll-next]').forEach(el => {
        el.style.opacity = (scrollValue === (scrollWidth - window.innerWidth)) ? 0 : 1;
      }) 
    }
  }
}

serviceMobileSlider();