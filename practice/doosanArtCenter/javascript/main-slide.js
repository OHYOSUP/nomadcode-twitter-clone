const sectionContainer = document.querySelector(".poster-container");
const sections = document.querySelectorAll(".poster");

let slideIndex = sections.length - 1;
let slideWidth = sections[0].clientWidth;
let currIndex = 0;

export default function timer() {
  if (currIndex < slideIndex) {
    currIndex++;
    sectionContainer.style.left = -(currIndex * (slideWidth+4)) + "px";
    sectionContainer.style.transition = '0.3s';

  } else {
    currIndex = 0;
    sectionContainer.style.left = -(currIndex * (slideWidth+4)) + "px";
    sectionContainer.style.transition = '0.3s';
  }
}
