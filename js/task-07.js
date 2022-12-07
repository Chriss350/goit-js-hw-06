const fontSizeCtrl = document.querySelector("#font-size-control");
const txtSize = document.querySelector("#text");

console.log(fontSizeCtrl.event);

txtSize.style.fontSize = `${fontSizeCtrl.value}px`;

fontSizeCtrl.addEventListener("input", (event) => {
  console.log(event);
  const inputValue = event.currentTarget.value;
  txtSize.style.fontSize = `${inputValue}px`;
});
