const sectionContainer = document.querySelector(".poster-container");
const sections = document.querySelectorAll(".poster");


let slideIndex = sections.length - 1;
let slideWidth = sections[0].clientWidth;
let currIndex = 0;

export default function timer() {
  if (currIndex < slideIndex) {
    currIndex++;

    sectionContainer.style.left = -(currIndex * slideWidth) + "px";
    sectionContainer.style.transition = "0.3s";

    // naviCircle.classList.remove("active");
    // naviCircleTwo.classList.add("active");
  } else {
    currIndex = 0;
    sectionContainer.style.left = -(currIndex * slideWidth) + "px";
    sectionContainer.style.transition = "0.3s";

    // naviCircle.classList.add("active");
    // naviCircleTwo.classList.remove("active");
  }
}


// navigator

// for (let i = 0; i < slideNav.length; i++) {
//   slideNav[i].style.cursor = "pointer";
//   slideNav[i].addEventListener("click", function (event) {
//     if(event.target === true){
//       // console.log(event.target);
//       slideNav[i].style.backgroundColor = '#fff';
//       event.target.style.backgroundColor = '#000';
//     }
//   });
// }


