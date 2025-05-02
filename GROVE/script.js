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
// 1. 대상 요소 불러오기
const target = document.getElementById("typewriter");

// 2. 타자 효과로 출력할 문장 목록
const texts = ["안녕하세요", "환영합니다", "이건 타자 효과입니다"];

// 3. 현재 문장 번호 / 글자 위치 / 상태 플래그
let textIndex = 0;
let charIndex = 0;
let typing = true; // true: 입력중 / false: 지우는 중

// 4. 효과 실행 함수
function typeLoop() {
  const currentText = texts[textIndex]; // 현재 문장

  if (typing) {
    // 글자 하나씩 늘려가며 보여줌
    target.textContent = currentText.slice(0, charIndex++);
    if (charIndex > currentText.length) {
      typing = false; // 다 쓰면 지우기로 전환
      setTimeout(typeLoop, 1000); // 1초 멈춤
      return;
    }
  } else {
    // 글자 하나씩 줄여가며 지움
    target.textContent = currentText.slice(0, --charIndex);
    if (charIndex === 0) {
      typing = true; // 다 지우면 다음 문장
      textIndex = (textIndex + 1) % texts.length;
    }
  }

  // 다음 타자 타이밍 설정
  setTimeout(typeLoop, typing ? 100 : 50); // 타자 속도 / 삭제 속도
}

// 5. 처음 실행
typeLoop();
