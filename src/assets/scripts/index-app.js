import i18next from 'i18next';
import gsap from 'gsap';
import axios from 'axios';
import * as yup from 'yup';
import FormMonster from '../../pug/components/form/form';
import SexyInput from '../../pug/components/input/input';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "current-device";


global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);
global.axios = axios;

const form = [
  '[data-form]',
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
            rule: yup.string().required(i18next.t('required')).matches(/^[aA-zZ\s]+$/, i18next.t('onlyletters')).trim(),
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

contacts.forEach((contacts) => {
  const $form = document.querySelector(contacts);
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
            rule: yup.string().required(i18next.t('required')).matches(/^[aA-zZ\s]+$/, i18next.t('onlyletters')).trim(),
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



document.querySelectorAll('.block-style-column__mobile-slider').forEach(handleMobileBlockImageHorizontalScroll);


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
    imageScrollContainer.scrollTo(evt.target.value - window.innerWidth ,0);

    const swipeXoffset = gsap.utils.mapRange(
      0 ,
      evt.target.getAttribute('max'),
      slideSvgButtonRadius * 2, sliderSvgWidth, 
      evt.target.value
    );
    slideSvgButton.setAttribute('transform', `translate(${swipeXoffset - (slideSvgButtonRadius * 2)} ,0)`)
  });
}