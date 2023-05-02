const isMobile = window.matchMedia('(max-width: 1024px)').matches;

window.onload = function () {
  const header = document.querySelector('header');

  document.body.classList.add('loaded_hiding');
  header.classList.add('close');

  window.setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
    if (isMobile) return;
    header.classList.remove('close');
    header.classList.add('open');
  }, 1000);

  if (isMobile) {
    mobileHeaderHandler();
    mobPopupHandler();
    return;
  }
  header.addEventListener('mouseover', () => {
    header.classList.add('open');
    header.classList.remove('close');
  });

  header.addEventListener('mouseout', () => {
    header.classList.remove('open');
    header.classList.add('close');
  });
};

document.onscroll = function () {
  chooseApartment();
  if (!isMobile) scrollFunction();
};

function scrollFunction() {
  const header = document.querySelector('header');

  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    header.classList.remove('open');
    header.classList.add('close');
  }

  if (header.classList.contains('close')) {
    header.addEventListener('mouseover', () => {
      header.classList.add('open');
      header.classList.remove('close');
    });

    header.addEventListener('mouseout', () => {
      header.classList.remove('open');
      header.classList.add('close');
    });
  }
}

function chooseApartment() {
  const btnText = document.querySelector('.choose-apartment-text');
  const btn = document.querySelector('.choose-apartment-btn');

  (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? btnText.classList.add('hidden') : btnText.classList.remove('hidden');

  if (btnText.classList.contains('hidden')) {
    btn.addEventListener('mouseover', () => {
      btnText.classList.remove('hidden');
    });

    btn.addEventListener('mouseout', () => {
      btnText.classList.add('hidden');
    });
  }
}

function headerMenuInner() {
  const inner = document.querySelector('.header__menu-inner');
  const btnForInner = document.querySelector('.header__menu-information');

  btnForInner.addEventListener('mouseover', () => {
    inner.classList.add('visible');
  });

  btnForInner.addEventListener('mouseout', () => {
    inner.classList.remove('visible');
  });

  inner.addEventListener('mouseout', () => {
    inner.classList.remove('visible');
  })
};

function init() {
  if (!isMobile) headerMenuInner();
}

function mobileHeaderHandler() {
  const header = document.querySelector('header');
  document.body.addEventListener('click',function(evt){
    const target = evt.target.closest('.header__menu-open');
    if (!target) return;
    header.classList.toggle('open');
    header.classList.toggle('close');
  });
  document.body.addEventListener('click',function innerMenuMobileDropdownHandlers(evt){
    const target = evt.target.closest('.header__menu-information');
    if (!target) {
      document.querySelectorAll('.header__menu-inner.active').forEach(el => el.classList.remove('active'))
      return;
    }
    target.querySelector('.header__menu-inner').classList.add('active');
  });
}

/** Mobile callback popup */
function mobPopupHandler() {
  function close(el) {
    gsap.to(el, { autoAlpha: 0, zIndex: 10 });
  }
  function open(el) {
    gsap.to(el, { autoAlpha: 1, zIndex: 50 });
  }

  document.querySelectorAll('[data-call-mobile-callback-popup]').forEach(el => {
    el.removeAttribute('data-call-form');
  })
  document.body.addEventListener('click',function openMobileCallbackPopup(evt){
    const target = evt.target.closest('[data-call-mobile-callback-popup]');
    if (!target) return;
    open(document.querySelector('[data-mobile-callback-popup]'));
  });
  document.body.addEventListener('click',function closeMobileCallbackPopup(evt){
    const target = evt.target.closest('[data-mobile-callback-close]');
    if (!target) return;
    close(document.querySelector('[data-mobile-callback-popup]'));
  });
}

mobPopupHandler();

window.addEventListener('DOMContentLoaded', init);
