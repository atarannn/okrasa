window.onload = function () {
  const header = document.querySelector('header');

  document.body.classList.add('loaded_hiding');
  header.classList.add('close');

  window.setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
    header.classList.remove('close');
    header.classList.add('open');
  }, 1000);

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
  scrollFunction();
  chooseApartment();
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
  headerMenuInner();
}

window.addEventListener('DOMContentLoaded', init);
