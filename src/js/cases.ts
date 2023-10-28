import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

export default function cases() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".cases"));

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      modules: [Navigation, Pagination],
      slidesPerView: "auto",
      speed: 600,
      pagination: {
        el: element.querySelector<HTMLElement>(".cases__pagination"),
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".cases__arrows-btn--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".cases__arrows-btn--next"
        ),
      },
    });
  });
}
