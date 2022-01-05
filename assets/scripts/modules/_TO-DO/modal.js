export default function modalInit() {
  /* variables
  -------------------------------------------- */
  const elHtml = document.querySelector('html');
  const elModals = document.querySelectorAll('[modal2]');
  const elButtonsTrigger = document.querySelectorAll('[modal-trigger]');
  const elButtonsClose = document.querySelectorAll('[modal-close]');

  let elModalActive = null;
  let elModalOverlay = null;
  let awaitAnimation = false;

  /* function
  -------------------------------------------- */
  function removeClass() {
    elModals.forEach((el, index) => {
      el.classList.remove('is-active');
      el.classList.remove('animation-in');
      el.classList.remove('animation-out');
    });
  }

  function resetState() {
    elModalActive = null;
    elModalOverlay = null;
    awaitAnimation = false;
  }

  function modalClose() {
    elModalActive.classList.add('animation-out');

    const animationOut = () => {
      elModalOverlay.removeEventListener('animationend', animationOut);
      elHtml.classList.remove('no-scroll');
      resetState();
      removeClass();
    };
    elModalOverlay.addEventListener('animationend', animationOut, false);
  }

  function modalKeyUp(e) {
    const key = e.which || e.keyCode;

    if (key === 27 && elModalActive !== null) {
      modalClose();
    }
  }

  /* init
  -------------------------------------------- */
  if (elModals.length > 0) {
    elButtonsTrigger.forEach((el, index) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();

        const id = el.getAttribute('href');

        if (!awaitAnimation) {
          removeClass();
          elModalActive = document.querySelector(`#${id}`);
          elModalOverlay = elModalActive.querySelector('[modal-overlay]');
          elModalActive.classList.add('is-active');
          elHtml.classList.add('no-scroll');

          setTimeout(() => {
            elModalActive.classList.add('animation-in');
            awaitAnimation = true;
          }, 1);

          const animationIn = () => {
            elModalOverlay.removeEventListener('animationend', animationIn);
            awaitAnimation = false;
          };
          elModalOverlay.addEventListener('animationend', animationIn, false);
        }
      });
    });

    elButtonsClose.forEach((el, index) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        modalClose();
      });
    });

    document.addEventListener('keyup', modalKeyUp);
  }
}
