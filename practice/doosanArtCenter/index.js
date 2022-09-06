import dropDown from './javascript/hamberger.js';
import hambergerBtnAnim from './javascript/hambergerBtnAnim.js'; 
import timer from './javascript/main-slide.js';
import {leftNavBtn ,rightNavBtn} from './javascript/main-parallaxScroll.js';


const hambergerIcon = document.querySelectorAll("#hambergerIcon");
const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".btnContainer");
const sectionContainer = document.querySelector(".poster-container");
const handlerBtn = document. getElementById('main-slide-navi-handler')
const mainContainer = document.getElementById('programs-container');
const programs = document.getElementById('programs');
const contents = document.querySelectorAll('#programs-container>div');
const naviBtnContainer = document.getElementById('mainsection-navi-button');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');




// for(let i = 0; i< hambergerIcon.length; i++){
container.addEventListener('click',dropDown);
// }
// for(let i = 0; i< hambergerIcon.length; i++){
// container.addEventListener("click", hambergerBtnAnim);
// }

setInterval(timer,2000);

// programs.addEventListener('wheel',(e)=>{
//   e.preventDefault();

  
//     if(e.deltaY > 0){
//       for(let i = 0; i<550; i++){
//         console.log(i);
//         mainContainer.style.left = `-${i}px`
//         mainContainer.style.transition = `0.5s`
//       }
//     } else if(e.deltaY < 0){
//       for(let i = 600; i >=450 ; i--){
//         console.log(i);
//         mainContainer.style.left = `${i}px`   
//       }
//       console.log(e.deltaY)
//     }
// })
// version1


let offset = 0;

programs.addEventListener('wheel', (e) => {
  e.preventDefault();
    offset += Math.sign(e.deltaY) * 60;
// Math.sign()은 값이 양수, 음수, 0을 구분해 각각 1, -1, 0으로 나타낸다.
  // console.log(offset);
    if (offset < 0) {
        offset = 0;
    } else if (offset >  - mainContainer.innerWidth) {
        offset = 360 - mainContainer.innerWidth;
    }
    
    mainContainer.style.transform = `translateX(-${offset}px`;
    if(offset >= 700){
      offset = 700;
    }
});



rightBtn.addEventListener('click', ()=>{
  
  rightNavBtn();
})


leftBtn.addEventListener('click', ()=>{
  leftNavBtn();
})


