const descContainer = document.getElementById('descContainer')
const desc = document.querySelectorAll('.desc');
const naviCircle = document.querySelector(".slide-navi");
const naviCircleTwo = document.querySelector(".slide-navi-two");
const slideNav = document.querySelectorAll("#slidenavi");


let descSlideIndex = desc.length - 1;
let descSlideWidth = desc[0].clientWidth;
let descCurrIndex = 0;

// console.log(descSlideWidth)


// export default function descTimer() {
//   if (descCurrIndex < descSlideIndex) {
//     descCurrIndex++;

//     descContainer.style.left = -(descCurrIndex * (descSlideWidth-4)) + "px";
//     descContainer.style.transition = "0.3s";
//   } else {
//     descCurrIndex = 0;
//     descContainer.style.left = -(descCurrIndex * (descSlideWidth-4)) + "px";
//     descContainer.style.transition = "0.3s";

//     descContainer.style.left = -(descCurrIndex * (descSlideWidth-4)) + "px";
//     descContainer.style.transition = "0.3s";

//   }
// }

export default function descTimer() {
  if (descCurrIndex < descSlideIndex) {
    descCurrIndex++;

    descContainer.style.left = -(descCurrIndex * descSlideWidth - 4) + "px";
    descContainer.style.transition = "0.3s";

    naviCircle.classList.remove("active");
    naviCircleTwo.classList.add("active");
  } else {
    descCurrIndex = 0;
    descContainer.style.left = -(descCurrIndex * descSlideWidth - 4) + "px";
    descContainer.style.transition = "0.3s";

    naviCircle.classList.add("active");
    naviCircleTwo.classList.remove("active");
  }
}

