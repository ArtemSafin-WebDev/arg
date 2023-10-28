import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function menu() {
  const SPEED = 0.6;
  const openMenuBtn =
    document.querySelector<HTMLButtonElement>(".js-open-menu-btn");

  if (openMenuBtn) {
    openMenuBtn?.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.add("menu-open");
    });
  }
  const closeMenuBtn =
    document.querySelector<HTMLButtonElement>(".js-close-menu-btn");

  if (closeMenuBtn) {
    closeMenuBtn?.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.remove("menu-open");
    });
  }

  const openAccordion = (element: HTMLElement | null | undefined) => {
    if (!element) return;
    gsap.to(element, {
      height: "auto",
      duration: SPEED,
      onComplete: () => ScrollTrigger.refresh(),
    });
  };
  const closeAccordion = (element: HTMLElement | null | undefined) => {
    if (!element) return;
    gsap.to(element, {
      height: 0,
      duration: SPEED,
      onComplete: () => ScrollTrigger.refresh(),
    });
  };

  const menuAccordions = Array.from(
    document.querySelectorAll<HTMLLinkElement>(".page-header__nav-link")
  )
    .filter((link) =>
      link.parentElement?.querySelector<HTMLElement>(
        ".page-header__nav-dropdown"
      )
    )
    .map((link) => {
      return {
        accordion: link.parentElement,
        btn: link,
        content: link.parentElement?.querySelector<HTMLElement>(
          ".page-header__nav-dropdown"
        ),
      };
    });

  menuAccordions.forEach(({ accordion, btn, content }) => {
    btn.addEventListener("click", (event) => {
      if (!window.matchMedia("(max-width: 1279px)").matches) return;
      event.preventDefault();
      if (accordion?.classList.contains("active")) {
        closeAccordion(content);
        accordion.classList.remove("active");
      } else {
        openAccordion(content);
        accordion?.classList.add("active");
      }
    });
  });
}
