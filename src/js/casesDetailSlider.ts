import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

export default function casesDetailSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-cases-detail-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;

    new Swiper(container, {
      modules: [Navigation, Pagination],
      slidesPerView: "auto",
      speed: 600,
      spaceBetween: 12,
      pagination: {
        el: element.querySelector<HTMLElement>(
          ".cases-detail__other-slider-pagination"
        ),
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".cases-detail__other-slider-arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".cases-detail__other-slider-arrow--next"
        ),
      },
    });
  });
}
