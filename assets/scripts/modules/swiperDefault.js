// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

export default function swiperDemoInit() {
  const elSliders = document.querySelectorAll('.c-swiper-default');
  const instancesSwiper = [];

  elSliders.forEach((el, index) => {
    const swiperID = `swiper-default-${index}`;
    const elRoot = el;
    el.setAttribute('id', swiperID);

    const swiper = new Swiper(el, {
      speed: 500,
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        prevEl: elRoot.querySelector('.swiper-button-prev'),
        nextEl: elRoot.querySelector('.swiper-button-next'),
      },
      scrollbar: {
        el: elRoot.querySelector('.swiper-scrollbar'),
        draggable: true,
      },
      pagination: {
        el: elRoot.querySelector('.swiper-pagination'),
      },
      breakpoints: {
        // 1024 >=
        1024: {
          spaceBetween: 40,
        },
      },
    });

    instancesSwiper.push(swiper);
  });
}
