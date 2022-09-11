const icon = document.querySelector(".hamberger");
const dropdownMenu = document.getElementById("dropdownMenu");
const hambergerIcon = document.querySelectorAll("#hambergerIcon");

let isStatus = true;

export default function dropDown() {
  if (isStatus) {
    dropdownMenu.style.top = "0vh";
    isStatus = !isStatus;
    // console.log(isStatus)
  } else {
    dropdownMenu.style.top = "-100vh";
    isStatus = !isStatus;
    // console.log(isStatus)

  }
}
