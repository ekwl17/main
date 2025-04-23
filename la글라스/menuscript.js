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
