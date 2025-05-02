window.addEventListener("DOMContentLoaded", () => {
  // 큰 슬라이더
  const swiper1 = new Swiper(".mainSwiper", {
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 1000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 18000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 작은 슬라이더
  const swiper2 = new Swiper(".smallSwiper", {
    effect: "slide",
    fadeEffect: { crossFade: true },
    speed: 1000,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 18000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 버튼 이벤트
  document.getElementById("nextBtn").addEventListener("click", () => {
    swiper1.slideNext();
    swiper2.slideNext();
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    swiper1.slidePrev();
    swiper2.slidePrev();
  });
});
//////////////////////////////////////////////////////
