const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

const incBtn = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
const decBtn = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

btnMinus.addEventListener("click", decBtn);
btnPlus.addEventListener("click", incBtn);
