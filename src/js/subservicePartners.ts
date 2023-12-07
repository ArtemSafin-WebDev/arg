import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function subservicePartners() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".subservice-detail__partners")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      modules: [Navigation, Pagination],
      slidesPerView: "auto",
      speed: 600,
      pagination: {
        el: element.querySelector<HTMLElement>(
          ".subservice-detail__partners-pagination"
        ),
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".subservice-detail__partners-arrows-btn--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".subservice-detail__partners-arrows-btn--next"
        ),
      },
    });
  });
}
