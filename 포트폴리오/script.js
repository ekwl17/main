// fullPage.js 초기화
$(function () {
  $("#fullpage").fullpage({
    autoScrolling: true,
    slidesNavigation: false,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    scrollingSpeed: 800,
    recordHistory: false,
    anchors: ["page1", "page2", "page3", "page4", "page5"],
    menu: "#pageMenu",
    afterLoad: function () {
      AOS.refresh();
    },
  });
});

// 텍스트 순환
const spans = document.querySelectorAll("#wordList li span");
const liItems = document.querySelectorAll("#wordList li");
const classSet = ["on1", "on2", "on3", "on4"];
const widthSet = [450, 650, 800, 430];
let current = 0;

function updateSpans(index) {
  spans.forEach((span) => {
    classSet.forEach((cls) => span.classList.remove(cls));
    span.classList.add(classSet[index]);
  });
}

function updateWidth(index) {
  liItems.forEach((li) => {
    const newWidth = widthSet[index];
    li.style.transition = "width 0.3s ease";
    li.style.width = newWidth + "px";
  });
}

updateSpans(current);
updateWidth(current);

setInterval(() => {
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

// GSAP SplitText
gsap.registerPlugin(SplitText);
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
