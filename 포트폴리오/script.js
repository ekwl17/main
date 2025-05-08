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
  // transition 잠깐 꺼줌
  liItems.forEach((li) => li.classList.add("no-transition"));

  current++;
  if (current === liItems.length - 1) {
    updateSpans(current);
    updateWidth(current);
    setTimeout(() => {
      current = 0;
      updateSpans(0);
      updateWidth(0);
    }, 10); 
  } else {
    updateSpans(current);
    updateWidth(current);
  }

 
  requestAnimationFrame(() => {
    liItems.forEach((li) => li.classList.remove("no-transition"));
  });
}, 3000);

gsap.registerPlugin(SplitText);

console.clear();

document.fonts.ready.then(() => {
  gsap.set(".split", { opacity: 1 });

  const split = SplitText.create(".split", {
    type: "words",
    wordsClass: "word++",
    wordDelimiter: String.fromCharCode(8205),
  });

  gsap.from(split.words, {
    y: -100,
    opacity: 0,
    rotation: "random(-60, 60)",
    stagger: 0.1,
    duration: 1,
    ease: "back",
  });
});
