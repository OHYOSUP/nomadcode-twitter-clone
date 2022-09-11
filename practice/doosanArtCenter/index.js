import dropDown from "./javascript/hamberger.js";
import hambergerBtnAnim from "./javascript/hambergerBtnAnim.js";
import { leftNavBtn, rightNavBtn } from "./javascript/main-parallaxScroll.js";
import onloadFadeIn from "./javascript/onloadFadeIn.js";
import limit from './javascript/dragSlide.js';
import timer from "./javascript/main-slide.js";
import descTimer from "./javascript/main-slide-desc.js";
import navTimer from "./javascript/main-slide-navi.js";

const hambergerIcon = document.querySelectorAll("#hambergerIcon");
const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".btnContainer");
const handlerBtn = document.getElementById("main-slide-navi-handler");
const mainContainer = document.getElementById("programs-container");
const programs = document.getElementById("programs");
const contents = document.querySelectorAll("#programs-container>div");
const naviBtnContainer = document.getElementById("mainsection-navi-button");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const items = document.querySelectorAll(".fade");
const programsContainer = document.getElementById("programs-container");
const sections = document.querySelectorAll(".poster");
const sectionContainer = document.querySelector(".poster-container");
const naviCircle = document.querySelector(".slide-navi");
const naviCircleTwo = document.querySelector(".slide-navi-two");
const slideNav = document.querySelectorAll("#slidenavi");
const mainSlideNav = document.querySelector('.main-slide-navi')
const desc = document.querySelectorAll('.desc');
const descContainer = document.getElementById('descContainer')

onloadFadeIn();
container.addEventListener("click", dropDown);
container.addEventListener('click', hambergerBtnAnim);


// poster
let slideIndex = sections.length - 1;
let slideWidth = sections[0].clientWidth;
let currIndex = 0;
setInterval(timer, 2000);

// desc slider
let descSlideIndex = desc.length - 1;
let descSlideWidth = desc[0].clientWidth;
let descCurrIndex = 0;
setInterval(descTimer,2000);

// nav slider
let navSlideIndex = slideNav.length - 1;
let navSlideWidth = slideNav[0].clientWidth;
let navCurrIndex = 0;
setInterval(navTimer(navCurrIndex, navSlideIndex, navSlideWidth, mainSlideNav),2000)




let offset = 0;

programs.addEventListener("wheel", (e) => {
  e.preventDefault();
  offset += Math.sign(e.deltaY) * 60;
  // Math.sign()은 값이 양수, 음수, 0을 구분해 각각 1, -1, 0으로 나타낸다.
  // console.log(offset);
  if (offset < 0) {
    offset = 0;
  } else if (offset > -mainContainer.innerWidth) {
    offset = 360 - mainContainer.innerWidth;
  }

  mainContainer.style.transform = `translateX(-${offset}px`;
  if (offset >= 600) {
    offset = 600;
  }
});

rightBtn.addEventListener("click", () => {
  rightNavBtn();
});

leftBtn.addEventListener("click", () => {
  leftNavBtn();
});




