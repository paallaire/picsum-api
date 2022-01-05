export default function cursorCustomInit() {
  const links = document.querySelectorAll('a, button');
  const elCustomCursor = document.querySelector('.js-custom-cursor');

  if (elCustomCursor) {
    elCustomCursor.setAttribute('data-module', 'custom-cursor');

    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      elCustomCursor.style.left = `${x}px`;
      elCustomCursor.style.top = `${y}px`;
    });

    document.addEventListener('mousedown', () => {
      elCustomCursor.classList.add('is-click');
    });

    document.addEventListener('mouseup', () => {
      elCustomCursor.classList.remove('is-click');
    });

    if (links) {
      links.forEach((item) => {
        item.addEventListener('mouseover', () => {
          elCustomCursor.classList.add('is-hover');
        });
        item.addEventListener('mouseleave', () => {
          elCustomCursor.classList.remove('is-hover');
        });
      });
    }
  }
}
