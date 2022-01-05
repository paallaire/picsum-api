/* eslint-disable import/no-extraneous-dependencies */

// polyfill only stable `core-js` features - ES and web standards:
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Alpine from 'alpinejs';
import modal from './alpine/modal';
import navMobile from './alpine/navMobile';
import accordion from './alpine/accordion';
import consentCookies from './alpine/consentCookies';
import infinityLoad from './alpine/infinityLoad';
import gridArticles from './alpine/gridArticles';

import debugInit from './debug/index';
import cursorCustomInit from './modules/cursorCustom';
import swiperDefaultInit from './modules/swiperDefault';
import swiperCustomInit from './modules/swiperCustom';
import customInputFileInit from './modules/customInputFile';
import aosInit from './modules/animationOnScroll';
import revealInit from './modules/reveal';

/* Alpine
-------------------------------------------- */
Alpine.data('modal', modal);
Alpine.data('navMobile', navMobile);
Alpine.data('accordion', accordion);
Alpine.data('consentCookies', consentCookies);
Alpine.data('infinityLoad', infinityLoad);
Alpine.data('gridArticles', gridArticles);

window.Alpine = Alpine;
Alpine.start();

/* Custom javascript
-------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  debugInit();
  cursorCustomInit();
  swiperDefaultInit();
  swiperCustomInit();
  customInputFileInit();
  aosInit();
  revealInit();
});
