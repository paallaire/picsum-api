export default function lazyImagesInit() {
  let lazyloadImages;
  let lazyloadThrottleTimeout;

  /* funciton
  -------------------------------------------- */
  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(() => {
      lazyCheck();
    }, 20);
  }

  function lazyCheck() {
    const scrollTop = window.pageYOffset;
    lazyloadImages.forEach((img) => {
      if (img.offsetTop < (window.innerHeight + scrollTop)) {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      }
    });
    if (lazyloadImages.length === 0) {
      document.removeEventListener('scroll', lazyload);
      window.removeEventListener('resize', lazyload);
      window.removeEventListener('orientationChange', lazyload);
    }
  }

  /* init
    -------------------------------------------- */
  if ('IntersectionObserver' in window) {
    lazyloadImages = document.querySelectorAll('.lazy');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove('lazy');
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach((image) => {
      imageObserver.observe(image);
    });
  } else {
    lazyloadImages = document.querySelectorAll('.lazy');

    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListener('orientationChange', lazyload);
  }
}
