import "virtual:svg-icons-register";
import "../scss/style.scss";
import partners from "./partners";
import cases from "./cases";
import menu from "./menu";
import numbers from "./numbers";
import lazyloading from "./lazyloading";
import casesDetailSlider from "./casesDetailSlider";
import showMore from "./showMore";
import modals from "./modals";
import forms from "./forms";
import clearInput from "./clearInput";
import articleDetailSlider from "./articleDetailSlider";
import messages from "./messages";
import subservicePartners from "./subservicePartners";
import fancybox from "./fancybox";
import accordions from "./accordions";

document.addEventListener("DOMContentLoaded", () => {
  menu();
  partners();
  cases();
  numbers();
  lazyloading();
  casesDetailSlider();
  showMore();
  modals();
  forms();
  clearInput();
  articleDetailSlider();
  messages();
  subservicePartners();
  fancybox();
  accordions();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
