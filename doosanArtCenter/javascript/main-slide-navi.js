

const naviCircle = document.querySelector(".slide-navi");
const naviCircleTwo = document.querySelector(".slide-navi-two");
const slideNav = document.querySelectorAll("#slidenavi");


let navSlideIndex = slideNav.length - 1;
let navSlideWidth = slideNav[0].clientWidth;
let navCurrIndex = 0;

export default function navTimer(nowIndex, elemIndex ,elemWidth, elem) {
  if (nowIndex < elemIndex) {
    nowIndex++;

    elem.style.left = -(nowIndex * elemWidth) + "px";
    elem.style.transition = "0.3s";

    naviCircle.classList.remove("active");
    naviCircleTwo.classList.add("active");
  } else {
    nowIndex = 0;
    elem.style.left = -(nowIndex * elemWidth) + "px";
    elem.style.transition = "0.3s";

    naviCircle.classList.add("active");
    naviCircleTwo.classList.remove("active");
  }
}

for (let i = 0; i < slideNav.length; i++) {
  slideNav[i].style.cursor = "pointer";
  slideNav[i].addEventListener("click", function (event) {
    if(event.target === true){
      // console.log(event.target);
      slideNav[i].style.backgroundColor = '#fff';
      event.target.style.backgroundColor = '#000';
    }
  });
}