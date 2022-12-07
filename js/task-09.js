function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const colorNr = document.querySelector(".color");
colorNr.textContent = "#FFFFFF";

btn.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorNr.textContent = randomColor;
});
