import Rellax from 'rellax';

export default function parallaxInit() {
  const elRellax = document.querySelectorAll('.rellax');

  if (elRellax.length) {
    const rellax = new Rellax('.rellax', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }
}
