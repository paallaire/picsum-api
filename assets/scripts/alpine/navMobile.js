export default (id) => ({
  id,
  isOpen: false,
  elTrigger: null,
  cssClass: {
    isActive: 'is-active',
  },
  init() {
    this.elTrigger = document.querySelectorAll(`[data-trigger-nav-mobile="${this.id}"]`);

    document.addEventListener('navMobile:open', (e) => {
      this.open();
    }, false);

    document.addEventListener('navMobile:close', (e) => {
      this.close();
    }, false);

    const mobileMenuLinks = document.querySelectorAll('.c-mobile-menu-nav a');
    mobileMenuLinks.forEach((element, index) => {
      element.addEventListener('click', (e) => {
        document.dispatchEvent(new CustomEvent('navMobile:close', { bubbles: true, detail: {} }));
      });
    });
  },
  close() {
    this.isOpen = false;

    this.elTrigger.forEach((el) => {
      el.classList.remove(this.cssClass.isActive);
    });
  },
  open() {
    this.isOpen = true;

    this.elTrigger.forEach((el) => {
      el.classList.add(this.cssClass.isActive);
    });
  },
});
