// import hamberger from "./javascript/hamberger";

const icon = document.querySelector(".hamberger");
const dropdownMenu = document.getElementById("dropdownMenu");
const hambergerIcon = document.getElementById("hambergerIcon");



let dropdownPosition = -100


dropdownMenu.style.width = "100vw";
dropdownMenu.style.height = "100vh";
dropdownMenu.style.position = "absolute";
dropdownMenu.style.zIndex = 10;
dropdownMenu.style.backgroundColor = "#ccc";
dropdownMenu.style.top =  '-100vh';
dropdownMenu.style.transition =  'top ease-out 0.5s';
hambergerIcon.style.zIndex = 11;



let isStatus = false;

function dropDown(){
  if(isStatus){
    dropdownMenu.style.top = '0vh';
    isStatus=!isStatus;
  }else{
    dropdownMenu.style.top = '-100vh';
    isStatus=!isStatus;
  }
}

hambergerIcon.addEventListener('click',dropDown);
