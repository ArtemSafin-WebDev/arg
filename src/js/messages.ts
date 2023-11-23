export default function messages() {
  const closeBtns = Array.from(
    document.querySelectorAll<HTMLButtonElement>(".js-message-close")
  );

  closeBtns.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const message = btn.closest<HTMLElement>(".message");
      message?.classList.toggle("active");
    })
  );
}
