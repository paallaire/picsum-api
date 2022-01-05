import Cookies from 'js-cookie';

export default () => ({
  isOpen: false,
  cookiesName: 'consent_cookies',
  durationExpires: 365,
  init() {
    if (Cookies.get(this.cookiesName)) return;

    this.isOpen = true;
  },
  onAllow() {
    Cookies.set(this.cookiesName, 1, { expires: this.durationExpires });
    this.isOpen = false;
  },
  onDisable() {
    Cookies.set(this.cookiesName, 0, { expires: this.durationExpires });
    this.isOpen = false;
  },
});
