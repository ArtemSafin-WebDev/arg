document.addEventListener("DOMContentLoaded", () => {
  const forms = Array.from(document.querySelectorAll(".js-form"));

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.validator?.validate();

      console.log("Validator", form.validator);

      if (form.validator?.valid) {
        console.log("Отправляем форму");
      }
    });
  });
});
