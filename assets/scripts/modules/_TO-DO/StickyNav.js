export default class StickyNav {
  constructor(selector, options = {}, isDebug = false) {
    this.selector = selector;
    this.element = document.querySelector(this.selector);
    this.options = options;
    this.isDebug = isDebug;

    this.lastTop = document.documentElement.scrollTop;
    this.top = null;
  }

  init() {
    this.top = document.documentElement.scrollTop;
    this.lastTop = this.top;

    setTimeout(() => {
      this.onScroll();
    }, 1);
  }

  onScroll() {
    this.top = document.documentElement.scrollTop;

    if (this.top !== this.lastTop) {
      if (this.top <= 0) {
        this.element.classList.remove('is-fixed');
        this.element.classList.add('is-top');
      } else {
        this.element.classList.remove('is-top');
      }

      if (this.top > this.lastTop && this.top > 0) {
        this.element.classList.remove('is-top');
        this.element.classList.add('is-fixed');
      }
    }

    this.lastTop = document.documentElement.scrollTop;
    requestAnimationFrame(() => this.onScroll());
  }
}
