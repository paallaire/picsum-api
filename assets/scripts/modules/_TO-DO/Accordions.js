export default class Accordions {
  constructor(selector, options = {}, isDebug = false) {
    this.selector = selector;
    this.element = document.querySelectorAll(this.selector);
    this.options = options;
    this.isDebug = isDebug;
    this.hashTag = window.location.hash;
  }

  checkHashTag(el) {
    if (el) {
      const component = el.closest(this.selector);

      if (component) {
        const button = el;
        const content = component.querySelector('[accordion-content]');

        content.style.setProperty('--max-height', `${content.scrollHeight}px`);
        component.classList.add('is-active');
        button.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');

        el.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'nearest',
        });
      }
    }
  }

  init() {
    if (this.hashTag) {
      const elHash = document.querySelector(this.hashTag);
      this.checkHashTag(elHash);
    }

    this.element.forEach((component) => {
      const button = component.querySelector('[accordion-button]');
      const content = component.querySelector('[accordion-content]');

      if (component.classList.contains('is-active')) {
        button.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
      }

      button.addEventListener('click', (e) => {
        e.preventDefault();

        if (component.classList.contains('is-active')) {
          component.classList.remove('is-active');
          button.setAttribute('aria-expanded', 'false');
          content.setAttribute('aria-hidden', 'true');
        } else {
          content.style.setProperty('--max-height', `${content.scrollHeight}px`);
          component.classList.add('is-active');
          button.setAttribute('aria-expanded', 'true');
          content.setAttribute('aria-hidden', 'false');
        }
      });
    });
  }
}
