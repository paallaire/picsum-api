/* eslint-disable import/no-extraneous-dependencies */

// polyfill only stable `core-js` features - ES and web standards:
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Alpine from 'alpinejs';
import picsumApi from './alpine/picsum-api';

import debugInit from './debug/index';

/* Alpine
-------------------------------------------- */
Alpine.data('picsumApi', picsumApi);

window.Alpine = Alpine;
Alpine.start();

/* Custom javascript
-------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  debugInit();
});
