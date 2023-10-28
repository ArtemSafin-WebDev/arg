import "virtual:svg-icons-register";
import "../scss/style.scss";
import partners from "./partners";
import cases from "./cases";
import menu from "./menu";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  partners();
  cases();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
