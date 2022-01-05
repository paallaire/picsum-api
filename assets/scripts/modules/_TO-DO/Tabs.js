export default class Tabs {
  constructor(selector, options = {}, isDebug = false) {
    this.selector = selector;
    this.elComponent = document.querySelectorAll(this.selector);
    this.options = options;
    this.isDebug = isDebug;
    this.hashTag = window.location.hash;
  }

  // eslint-disable-next-line class-methods-use-this
  updateTab(id, el) {
    const elComponent = el.closest('[tabs]');
    const elAllTabsButtons = elComponent.querySelectorAll('[tabs-button]');
    const elAllTabsContent = elComponent.querySelectorAll('[tabs-content]');
    const elActiveButton = elComponent.querySelector(`[data-button-index="${id}"]`);
    const elActiveContent = elComponent.querySelector(`[data-content-index="${id}"]`);
    const tabsSelect = elComponent.querySelector('[tabs-select]');

    /* buttons */
    elAllTabsButtons.forEach((button) => {
      button.classList.remove('is-active');
      button.setAttribute('aria-selected', 'false');
    });

    elActiveButton.classList.add('is-active');
    elActiveButton.setAttribute('aria-selected', 'true');

    /* content */
    elAllTabsContent.forEach((content) => {
      content.classList.remove('is-active');
      content.setAttribute('aria-hidden', 'true');
    });
    elActiveContent.classList.add('is-active');
    elActiveContent.setAttribute('aria-hidden', 'false');

    tabsSelect.selectedIndex = (id - 1);
  }

  init() {
    this.elComponent.forEach((elComponent) => {
      const tabsButtons = elComponent.querySelectorAll('[tabs-button]');
      const tabsSelect = elComponent.querySelector('[tabs-select]');

      if (tabsButtons.length > 0) {
        tabsSelect.addEventListener('change', (e) => {
          const { value } = e.target;
          const el = e.currentTarget;
          this.updateTab(value, el);
        });

        tabsButtons.forEach((button) => {
          button.addEventListener('click', (e) => {
            e.preventDefault();

            const el = e.currentTarget;

            if (!el.classList.contains('is-active')) {
              const id = el.dataset.buttonIndex;
              this.updateTab(id, el);
            }
          });
        });

        this.updateTab(1, tabsButtons[0]);
      }
    });
  }
}
