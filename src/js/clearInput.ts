export default function clearInput() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-clear-input")
  );

  elements.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const input =
        element.parentElement?.querySelector<HTMLInputElement>("input");
      if (input) {
        input.value = "";
        input.dispatchEvent(new Event("input"));
        input.dispatchEvent(new Event("change"));
      }
    });
  });
}
