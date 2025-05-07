$(function () {
  $("#fullpage").fullpage({
    autoScrolling: true,
    slidesNavigation: false,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    scrollingSpeed: 800,
    // responsiveWidth: 920,
    // responsiveHeight:900,
    recordHistory: false,
    anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
    menu: "#pageMenu",
    // autoScrolling: false,

    onLeave: function (index, nextIndex, direction) {
      console.log(`onleave!`);
    },
    afterLoad: function (anchorLink, index) {
      console.log(`afterLoad!`);
    },
    afterRender: function () {
      console.log(`afterRender!`);
    },
    afterResize: function () {
      console.log(`afterResize!`);
    },
    afterResponsive: function (isResponsive) {
      console.log(`afterResponsive!`);
    },
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
      console.log(`afterSlideLoad!`);
    },
    onSlideLeave: function (
      anchorLink,
      index,
      slideIndex,
      direction,
      nextSlideIndex
    ) {
      console.log(`onSlideLeave!`);
    },
  });
});

const spans = document.querySelectorAll("#wordList li span");
const liItems = document.querySelectorAll("#wordList li");

const classSet = ["on1", "on2", "on3", "on4"];
const widthSet = [430, 650, 570, 430];

let current = 0;

// span에 클래스 붙이기
function updateSpans(index) {
  spans.forEach((span) => {
    classSet.forEach((cls) => span.classList.remove(cls));
    span.classList.add(classSet[index]);
  });
}

// li의 width 조정
function updateWidth(index) {
  liItems.forEach((li) => {
    const newWidth = widthSet[index];
    li.style.transition = "width 0.3s ease";
    li.style.width = newWidth + "px";
  });
}

// 초기 1회 실행
updateSpans(current);
updateWidth(current);

// 3초마다 순환
setInterval(() => {
  current++;
  if (current === liItems.length - 1) {
    setTimeout(() => {
      wordList.style.opacity = "0";
      current = 0;
      updateSpans(0);
      updateWidth(0);
    }, 600);
  }
  updateSpans(current);
  updateWidth(current);
}, 3000);
