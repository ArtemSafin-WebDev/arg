import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function numbers() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".numbers__slider")
  );

  const mql = window.matchMedia("(max-width: 767px)");

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    const options: SwiperOptions = {
      modules: [Navigation, Pagination],
      slidesPerView: "auto",
      speed: 600,
      pagination: {
        el: element.querySelector<HTMLElement>(".numbers__slider-pagination"),
        clickable: true,
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".numbers__slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".numbers__slider-arrow--next"
        ),
      },
    };

    let instance: Swiper | null = null;

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        if (instance) instance.destroy();
        instance = new Swiper(container, options);
      } else {
        if (instance) instance.destroy();
        instance = null;
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
}
