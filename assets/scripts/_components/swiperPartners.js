// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

export default function () {
  const $sliders = document.querySelectorAll('.swiper-partners');
  const instancesSwiper = [];

  $sliders.forEach(($element, index) => {
    const swiperID = `swiper-partners-${index}`;
    const $section = $element.closest('[data-slider="partners"]');
    $element.setAttribute('id', swiperID);

    const swiper = new Swiper($element, {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        prevEl: $section.querySelector('.swiper-button-prev-custom'),
        nextEl: $section.querySelector('.swiper-button-next-custom'),
      },
      breakpoints: {
        // when window width is >=768px
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        // when window width is >=1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
      },
    });

    instancesSwiper.push(swiper);
  });
}
