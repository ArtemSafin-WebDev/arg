document.addEventListener("DOMContentLoaded", () => {
  const forms = Array.from(document.querySelectorAll(".js-form"));
  const error = document.querySelector("#error");
  const success = document.querySelector("#success");
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.validator?.validate();

      console.log("Validator", form.validator);

      if (form.validator?.valid) {
        console.log("Отправляем форму");

        fetch(form.action, {
          method: "POST",
          body: new FormData(form),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Response is not OK");
            }

            document.body.classList.remove("modal-open");
            form.closest(".js-modal")?.classList.remove("active");
            success?.classList.add("active");
          })
          .catch((err) => {
            console.error(err);
            success?.classList.remove("active");
            error?.classList.add("active");
          });
      }
    });
  });
});
