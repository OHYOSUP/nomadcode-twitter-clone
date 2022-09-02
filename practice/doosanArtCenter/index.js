// import hamberger from "./javascript/hamberger";

const icon = document.querySelector(".hamberger");
const dropdownMenu = document.getElementById("dropdownMenu");
const hambergerIcon = document.getElementById("hambergerIcon");

console.log(hambergerIcon);
dropdownMenu.style.width = "100vw";
dropdownMenu.style.height = "100vh";
dropdownMenu.style.position = "absolute";
dropdownMenu.style.zIndex = 10;
dropdownMenu.style.backgroundColor = "#ccc";
dropdownMenu.style.top = "-100vh";
hambergerIcon.style.zIndex = 11;

hambergerIcon.addEventListener("click", function () {
  let isStatus = false;
  if (isStatus === false) {
    for (let i = -100; i < 0; i++) {
      dropdownMenu.style.top = `${i}vh`;
      dropdownMenu.style.transition = `0.5s`;
      isStatus = true;
      console.log(i);
    }
  } else if (isStatus === true) {
    for (let i = -1; i > -100; i++) {
      dropdownMenu.style.top = `${-i}vh`;
      dropdownMenu.style.transition = `0.5s`;
      isStatus = false;
    }
  }
});
