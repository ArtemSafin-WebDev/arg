import "virtual:svg-icons-register";
import "../scss/style.scss";
import partners from "./partners";
import cases from "./cases";
import menu from "./menu";
import numbers from "./numbers";
import lazyloading from "./lazyloading";
import casesDetailSlider from "./casesDetailSlider";
import showMore from "./showMore";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  partners();
  cases();
  numbers();
  lazyloading();
  casesDetailSlider();
  showMore();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
