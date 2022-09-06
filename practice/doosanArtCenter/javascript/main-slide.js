const sectionContainer = document.querySelector(".poster-container");
const sections = document.querySelectorAll(".poster");
const naviCircle = document.querySelector('.slide-navi');
const naviCircleTwo = document.querySelector('.slide-navi-two');



let slideIndex = sections.length - 1;
let slideWidth = sections[0].clientWidth;
let currIndex = 0;

export default function timer() {
  if (currIndex < slideIndex) {
    currIndex++;
    sectionContainer.style.left = -(currIndex * (slideWidth+4)) + "px";
    sectionContainer.style.transition = '0.3s';

    
      naviCircle.classList.remove('active');
      naviCircleTwo.classList.add('active');
    
  } else {
    currIndex = 0;
    sectionContainer.style.left = -(currIndex * (slideWidth+4)) + "px";
    sectionContainer.style.transition = '0.3s';
    // for(let i = 0; i< sections.length; i++){
      // naviCircle[i].classList.add("deActive");
      // naviCircle[sections.length-1].classList.remove("active");
      // console.log(i);
      naviCircle.classList.add('active');
      naviCircleTwo.classList.remove('active');
    // }
  }
}



// console.log(naviCircle);

// const startSlide = sections[0];
// const endSlide = sections[sections.length-1];
// const startElem = document.createElement('div');
// const endElem = document.createElement('div');

// console.log(endSlide);

// endSlide.classList.forEach((c)=>endElem.classList.add(c));
// endElem.innerHTML = endSlide.innerHTML;

// startSlide.classList.forEach((c)=>startElem.classList.add(c));
// startElem.innerHTML = startSlide.innerHTML;

// sections[0].before(endElem);
// sections[sections.length-1].after((startElem));


