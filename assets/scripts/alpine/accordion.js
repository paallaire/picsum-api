export default (initState = false) => ({
  isOpen: initState,
  init() {
    this.isOpen = initState;
    this.updateAttributes();
  },
  toggle() {
    this.isOpen = !this.isOpen;
    this.updateAttributes();
  },
  updateAttributes() {
    const { button } = this.$refs;
    const { content } = this.$refs;

    button.setAttribute('aria-expanded', this.isOpen);
    content.setAttribute('aria-hidden', !this.isOpen);

    if (this.isOpen) {
      button.classList.add('is-active');
    } else {
      button.classList.remove('is-active');
    }
  },
  isVisible() {
    return this.isOpen;
  },
});
