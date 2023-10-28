import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function partners() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".partners")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      modules: [Navigation, Pagination],
      slidesPerView: "auto",
      speed: 600,
      pagination: {
        el: element.querySelector<HTMLElement>(".partners__pagination"),
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".partners__arrows-btn--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".partners__arrows-btn--next"
        ),
      },
    });
  });
}
