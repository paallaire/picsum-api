// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

export default function swiperCustomInit() {
  const elSliders = document.querySelectorAll('.c-swiper-custom');
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
        prevEl: elRoot.querySelector('.swiper-button-prev-custom'),
        nextEl: elRoot.querySelector('.swiper-button-next-custom'),
      },
      pagination: {
        el: elRoot.querySelector('.swiper-pagination-custom'),
        type: 'custom',
        renderCustom(pSwiper, pCurrent, pTotal) {
          const totalDisplay = pTotal > 10 ? pTotal : `0${pTotal}`;
          const currentDisplay = pTotal > 10 ? pCurrent : `0${pCurrent}`;

          return `<span class="item-${pCurrent}">${currentDisplay}</span><span class="swiper-pagination-custom-sep">—</span><span class="total-${pTotal}">${totalDisplay}</span>`;
        },
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
