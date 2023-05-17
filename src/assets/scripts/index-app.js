import i18next from 'i18next';
import gsap from 'gsap';
import axios from 'axios';
import * as yup from 'yup';
import FormMonster from '../../pug/components/form/form';
import SexyInput from '../../pug/components/input/input';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "current-device";
import { TweenMax } from 'gsap/gsap-core';


global.TweenMax = TweenMax;
global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);
global.axios = axios;


let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

const form = [
  '[data-form]',
];

const revision = [
  '[data-revision]',
];

const contacts = [
  '[data-form-contacts]',
];


form.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, i18next.t('onlyletters')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
        },
      },
    });

    $form.querySelectorAll('.js-mask-absolute').forEach(el => {
      el.addEventListener('click', () => {
        $form.querySelector('[name="phone"]').focus();
        $form.querySelector('.js-mask-absolute').style.display = 'none';
      }, false);
    })
  }
});

revision.forEach((form) => {
  const $form = document.querySelector(form);
  if ($form) {
    new FormMonster({
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
            rule: yup.string().required(i18next.t('required')).matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, i18next.t('onlyletters')).trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          phone: {
            inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
            defaultMessage: i18next.t('phone'),
            valid: false,
            error: [],
          },
        },
      },
    });

    $form.querySelectorAll('.js-mask-absolute').forEach(el => {
      el.addEventListener('click', () => {
        $form.querySelector('[name="phone"]').focus();
        $form.querySelector('.js-mask-absolute').style.display = 'none';
      }, false);
    })
  }
});

initContactForm();
window.addEventListener('DOMContentReloaded', initContactForm)

function initContactForm() {
  contacts.forEach((contacts) => {
    const $form = document.querySelector(`.page__inner ${contacts}`);
    if ($form) {
      new FormMonster({
        elements: {
          $form,
          showSuccessMessage: false,
          successAction: () => {
            $form.insertAdjacentHTML('beforeend', `
              <div class="success">
                  <div class="form-title dark-title">${i18next.t('sendingSuccessTitle')}</div>
                  <div class="form-text dark-text">${i18next.t('sendingSuccessText')}</div>
              </div>
            `);
            setTimeout(() => {
                $form.querySelector('.success').remove();
            }, 5000);
          },
          $btnSubmit: $form.querySelector('[data-btn-submit]'),
          fields: {
            name: {
              inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-name]') }),
              rule: yup.string().required(i18next.t('required')).matches(/^[A-Za-zА-Яа-яЁёІіЇї\s]+$/, i18next.t('onlyletters')).trim(),
              defaultMessage: i18next.t('name'),
              valid: false,
              error: [],
            },
            phone: {
              inputWrapper: new SexyInput({ animation: 'none', $field: $form.querySelector('[data-field-phone]'), typeInput: 'phone' }),
              rule: yup
                .string()
                .required(i18next.t('required'))
                .min(17, i18next.t('field_too_short', { cnt: 19 - 7 })),
              defaultMessage: i18next.t('phone'),
              valid: false,
              error: [],
            },
          },
        },
      });

      $form.querySelectorAll('.js-mask-absolute').forEach(el => {
        el.addEventListener('click', () => {
          $form.querySelector('[name="phone"]').focus();
          $form.querySelector('.js-mask-absolute').style.display = 'none';
        }, false);
      })
    }
  });
}






document.querySelectorAll('.block-style-column__mobile-slider').forEach(handleMobileBlockImageHorizontalScroll);

window.addEventListener('DOMContentReloaded', () => {
  document.querySelectorAll('.block-style-column__mobile-slider').forEach(handleMobileBlockImageHorizontalScroll);

})

function handleMobileBlockImageHorizontalScroll(el) {
  const parent = el.closest('section');
  const slider = parent.querySelector('input');
  const sliderSvg = el;
  const slideSvgButton = sliderSvg.querySelector('.swipe');
  const slideSvgButtonRadius = +slideSvgButton.querySelector('circle').getAttribute('r');
  const imageScrollContainer = parent.querySelector('.block-style-column__mobile-scroller');
  const sliderSvgWidth = sliderSvg.getAttribute('viewBox').split(' ')[2];

  slider.value = 0;
  slider.setAttribute('max', imageScrollContainer.scrollWidth);

  slider.addEventListener('input', (evt) => {
    imageScrollContainer.scrollTo({
      left: evt.target.value - window.innerWidth / 2
    });

    const swipeXoffset = gsap.utils.mapRange(
      0 ,
      evt.target.getAttribute('max'),
      slideSvgButtonRadius * 2, sliderSvgWidth,
      evt.target.value
    );
    sliderSvg.insertAdjacentHTML('afterbegin', `
      <circle cx="40" cy="40" r="39.5" stroke="#fff" stroke-dasharray="1 10" class="Ellipse 83"></circle>
    `);
    slideSvgButton.setAttribute('transform', `translate(${swipeXoffset - (slideSvgButtonRadius * 2)} ,0)`)
  });

  slider.value = imageScrollContainer.scrollWidth / 2;
  slider.dispatchEvent(new Event('input'));
}



document.body.addEventListener('click',function(evt){
  const target = evt.target.closest('.block-style-nav');
  if (!target) return;
  if (target.getAttribute('href').match(/3d/)) return;
  evt.preventDefault();
  document.querySelectorAll('.js-cloned-for-transfer-page').forEach(el => {
    el.remove();
  })
  const cloned = target.cloneNode(true);
  cloned.classList.add('js-cloned-for-transfer-page')
  gsap.set(cloned, {
    position: 'fixed',
    width: "100%",
    height: target.getBoundingClientRect().height,
    top: target.getBoundingClientRect().top,
    left: "0",
    zIndex: "99"
  });
  cloned.querySelector('.block-offset-left').remove();
  cloned.querySelector('.block-style-nav-right').style.marginLeft = 'auto';
  cloned.querySelector('.block-style-nav-right').classList.add('transfering');
  cloned.querySelectorAll('.patern-main-1, .arrow-green, .patern-main-1').forEach(el => el.remove());
  const href = target.getAttribute('href');
  document.body.append(cloned);

  gsap.timeline()
    .to('.js-cloned-for-transfer-page .block-style-nav-right', {
      width: '100%',
      transformOrigin: 'right',
      duration: 0.45,
      ease: 'Expo.in'
    },'<')
    .to(cloned, {
      top: 0,
      height: window.innerHeight,
      duration: 0.75,
      ease: 'Expo.in'
    })
    .add(el => {
      if (barba) {
        barba.go(href);
      }
    })

});