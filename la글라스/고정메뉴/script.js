export function initMenuScript() {
  // script.js
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const rightmenus = document.querySelector(".rightmenus");
      const rm = document.querySelector(".rm");
      const closeBtn = document.querySelector(".closeBtn");

      const menuItems = document.querySelectorAll(".listinli");
      const submenus = document.querySelectorAll(".listinul");
      const bg = document.querySelector(".bg");
      const bgDiv = document.querySelectorAll(".bg > div");
      const nav = document.querySelector("nav");
      const subBg = document.querySelector(".subBg");

      let closeTimer;

      // 메뉴 열기/닫기
      rm.addEventListener("click", () => {
        rightmenus.classList.add("on");
      });
      closeBtn.addEventListener("click", () => {
        rightmenus.classList.remove("on");
      });

      // 서브메뉴 토글 함수
      function closeAllSub() {
        submenus.forEach((v) => v.classList.remove("on"));
        bgDiv.forEach((v) => v.classList.remove("on"));
        subBg.classList.remove("on");
        nav.classList.remove("on");
        bg.classList.remove("on");
      }

      // 호버로 서브메뉴 열기
      menuItems.forEach((item, idx) => {
        item.addEventListener("mouseenter", () => {
          clearTimeout(closeTimer);
          closeAllSub();

          item.querySelector(".listinul")?.classList.add("on");
          subBg.classList.add("on");
          nav.classList.add("on");
          bg.classList.add("on");
          bgDiv[idx]?.classList.add("on");
        });
      });

      // 네비 전체 영역 벗어나면 닫기
      nav.addEventListener("mouseleave", () => {
        closeTimer = setTimeout(closeAllSub, 100);
      });
    });
  })();
}
