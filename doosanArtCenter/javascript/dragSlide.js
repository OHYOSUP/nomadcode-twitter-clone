const programsContainer = document.getElementById("programs-container");

let pressed = false;
let startX;
let x;
programs.addEventListener("mousedown", (e) => {
  pressed = true;
  startX = e.pageX - programsContainer.offsetLeft;
});

window.addEventListener("mouseup", () => {
  pressed = false;
});

programs.addEventListener("mousemove", (e) => {
  if (!pressed) return
  e.preventDefault();
  x = e.offsetX;
  console.log(e.offsetX);
  

  programsContainer.style.left = `${x - startX}px`;
  limit();
});

export default function limit() {
  let outer = programs.getBoundingClientRect();
  let inner = programsContainer.getBoundingClientRect();

  if (parseInt(programsContainer.style.left) > 0) {
    programsContainer.style.left = `25vw`;

  } else if (inner.right < outer.right) {
    programsContainer.style.left = `-${inner.width - outer.width}px`;
  }
}