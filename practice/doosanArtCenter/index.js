import dropDown from './javascript/hamberger.js';
import hambergerBtnAnim from './javascript/hambergerBtnAnim.js'; 
import timer from './javascript/main-slide.js';

const hambergerIcon = document.querySelectorAll("#hambergerIcon");
const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".btnContainer");



// for(let i = 0; i< hambergerIcon.length; i++){
  container.addEventListener('click',dropDown);
// }
// for(let i = 0; i< hambergerIcon.length; i++){
container.addEventListener("click", hambergerBtnAnim);
// }

setInterval(timer,1000);
