/* eslint-disable import/no-extraneous-dependencies */

// polyfill only stable `core-js` features - ES and web standards:
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Alpine from 'alpinejs';
import modal from './alpine/modal';

import debugInit from './debug/index';

/* Alpine
-------------------------------------------- */
Alpine.data('modal', modal);

window.Alpine = Alpine;
Alpine.start();

/* Custom javascript
-------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  debugInit();
});
