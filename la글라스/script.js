const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".listinli");
const submenus = document.querySelectorAll(".listinul");
const bg = document.querySelector(".bg");
const bgDiv = document.querySelectorAll(".bg > div");
const nav = document.querySelector("nav");
const subBg = document.querySelector(".subBg");
let closeTimer = null;

function myfnc() {
  submenus.forEach((v) => v.classList.remove("on"));
  bgDiv.forEach((v) => v.classList.remove("on"));
}

const slides = document.querySelector(".banner");
const slideItems = document.querySelectorAll(".banner > div");
const totalSlides = slideItems.length;
let currentIndex = 0;
let isTransitioning = false;

function goToSlide(index) {
  isTransitioning = true;
  slides.style.transition = "transform 1.3s ease";
  slides.style.transform = `translateX(-${100 * index}vw)`;

  document
    .querySelectorAll(".bannertxt")
    .forEach((el) => el.classList.remove("on"));

  setTimeout(() => {
    const currentSlide = slideItems[index];
    const txt = currentSlide.querySelector(".bannertxt");
    if (txt) txt.classList.add("on");
    isTransitioning = false;
  }, 1300);
}

function jumpToRealStart() {
  slides.style.transition = "none";
  slides.style.transform = `translateX(0vw)`;
  currentIndex = 0;

  document
    .querySelectorAll(".bannertxt")
    .forEach((el) => el.classList.remove("on"));
  const firstSlide = slideItems[0];
  const txt = firstSlide.querySelector(".bannertxt");
  if (txt) txt.classList.add("on");
}

window.addEventListener("load", () => {
  goToSlide(0);
});

setInterval(() => {
  if (isTransitioning) return;

  currentIndex++;
  goToSlide(currentIndex);

  if (currentIndex === totalSlides - 1) {
    setTimeout(() => {
      jumpToRealStart();
    }, 1300);
  }
}, 4300);
