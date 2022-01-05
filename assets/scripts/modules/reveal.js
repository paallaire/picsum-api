export default function revealInit() {
  const elSection = document.querySelectorAll('[data-reveal-seciton]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const childs = entry.target.querySelectorAll('[data-reveal]');

      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-section-animate');
        observer.unobserve(entry.target);

        childs.forEach((element) => {
          element.classList.add('reveal-animate');
        });
      }
    });
  });

  elSection.forEach((element) => {
    const images = element.querySelectorAll('img');
    const total = images.length;
    let imagesLoaded = 0;

    images.forEach((image) => {
      image.addEventListener('load', (e) => {
        imagesLoaded += 1;

        if (imagesLoaded < total) return;

        observer.observe(element);
      });
    });
  });
}
