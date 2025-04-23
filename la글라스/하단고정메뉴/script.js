export function initMenuScript() {
  const menuItems = document.querySelectorAll(".listinli");
  const submenus = document.querySelectorAll(".listinul");
  const bg = document.querySelector(".bg");
  const bgDiv = document.querySelectorAll(".bg > div");
  const nav = document.querySelector("nav");
  const subBg = document.querySelector(".subBg");
  const rightmenus = document.querySelector(".rightmenus");
  const rm = document.querySelector(".rm");

  let closeTimer = null;

  function myfnc() {
    submenus.forEach((v) => v.classList.remove("on"));
    bgDiv.forEach((v) => v.classList.remove("on"));
  }

  if (rm && rightmenus) {
    rm.addEventListener("click", function () {
      rightmenus.classList.toggle("on");
    });
  }

  menuItems.forEach((v, k) => {
    v.addEventListener("mouseenter", function () {
      clearTimeout(closeTimer);
      myfnc();

      const submenu = this.querySelector(".listinul");
      if (submenu) submenu.classList.add("on");

      subBg.classList.add("on");
      nav.classList.add("on");
      bg.classList.add("on");
      if (bgDiv[k]) bgDiv[k].classList.add("on");
    });
  });

  nav.addEventListener("mouseleave", () => {
    closeTimer = setTimeout(() => {
      myfnc();
      subBg.classList.remove("on");
      nav.classList.remove("on");
      bg.classList.remove("on");
      bgDiv.forEach((v) => v.classList.remove("on"));
    }, 100);
  });
}

//스크롤효과
const sections = document.querySelectorAll("section");
let currentIndex = 0;
let isScrolling = false;

function scrollToIndex(index) {
  if (index < 0 || index >= sections.length) return;

  isScrolling = true;
  sections[index].scrollIntoView({
    behavior: "smooth",
  });

  setTimeout(() => {
    isScrolling = false;
    currentIndex = index;
  }, 800); // 이동 시간 고려해서 스크롤 잠금
}

window.addEventListener(
  "wheel",
  (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0 && currentIndex < sections.length - 1) {
      scrollToIndex(currentIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  },
  { passive: false }
);

// 페이지 진입 시 초기 위치 설정
window.onload = () => scrollToIndex(0);
