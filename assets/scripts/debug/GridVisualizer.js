export default class GridVisualizer {
  constructor(options) {
    const defaultOptions = {
      numberColumns: 12,
      containerCSsClass: '',
      rowCssClass: '',
      columnsCssClass: 'w-1/12',
      columnsCssClassCustom: null,
      blockCssClass: 'bg-gray-400',
    };
    this.options = Object.assign(defaultOptions, options);
    this.options.namespace = 'dev-grid-visualizer';
  }

  init() {
    const $buttonToggle = document.createElement('button');
    const $GridVisualizer = document.createElement('div');
    const $container = document.createElement('div');
    const $row = document.createElement('div');

    // buttonToggle
    $buttonToggle.setAttribute('class', 'dev-grid-visualizer-toggle');
    $buttonToggle.innerHTML = 'Show Grid';
    document.body.appendChild($buttonToggle);

    // bind event
    $buttonToggle.addEventListener('click', (e) => {
      e.preventDefault();
      $GridVisualizer.classList.toggle('is-active');

      if ($GridVisualizer.classList.contains('is-active')) {
        $buttonToggle.innerHTML = 'Hide grid';
      } else {
        $buttonToggle.innerHTML = 'Show grid';
      }
    });

    // GridVisualizer
    $GridVisualizer.setAttribute('class', 'dev-grid-visualizer');
    document.body.appendChild($GridVisualizer);

    // container
    $container.setAttribute('class', `dev-grid-visualizer__container ${this.options.containerCSsClass}`);
    $GridVisualizer.appendChild($container);

    // row
    $row.setAttribute('class', `dev-grid-visualizer__row ${this.options.rowCssClass}`);
    $container.appendChild($row);

    for (let i = 0; i < this.options.numberColumns; i += 1) {
      const column = document.createElement('div');
      const $block = document.createElement('div');

      if (this.options.columnsCssClassCustom) {
        column.setAttribute(
          'class',
          `dev-grid-visualizer__column ${this.options.columnsCssClass} ${this.options.columnsCssClassCustom[i]}`,
        );
      } else {
        column.setAttribute('class', `dev-grid-visualizer__column ${this.options.columnsCssClass}`);
      }

      $row.appendChild(column);

      $block.setAttribute('class', `dev-grid-visualizer__block ${this.options.blockCssClass}`);
      column.appendChild($block);
    }
  }
}
