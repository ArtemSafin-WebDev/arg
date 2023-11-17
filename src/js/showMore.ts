export default function showMore() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-show-more")
  );

  elements.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const parent = element.parentElement;
      if (parent) {
        parent.classList.toggle("show-all");
      }
    });
  });
}
