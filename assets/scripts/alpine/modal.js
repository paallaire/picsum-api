export default (id) => ({
  isOpen: false,
  id,
  elHtml: document.querySelector('html'),
  init() {
    document.addEventListener('modal:open', (e) => {
      if (this.id === e.detail) {
        this.isOpen = true;
        this.$nextTick(() => {
          this.elHtml.classList.add('no-scroll');
          this.$refs.modalTitle.focus();
        });
      }
    }, false);
  },
  close() {
    this.elHtml.classList.remove('no-scroll');
    this.isOpen = false;
  },
  isVisible() {
    return this.isOpen;
  },
});
