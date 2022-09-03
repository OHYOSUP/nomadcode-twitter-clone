const container = document.querySelector(".container");
const btns = document.querySelectorAll(".btn");
const btnContainer = document.querySelector(".btnContainer");



let isStatus = true;

export default function hambergerBtnAnim(){
  if (isStatus) {
    btnContainer.style.left = "-2.5vw";
    btnContainer.style.transition = "0.3s";
    isStatus = !isStatus;
  } else {
    btnContainer.style.left = "0px";
    btnContainer.style.transition = "0.3s";
    isStatus = !isStatus;
  }
}
