const txtInput = document.querySelector("#validation-input");
const maxInputLength = txtInput.dataset.length;

console.log(maxInputLength);
txtInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length >= maxInputLength) {
    txtInput.classList.add("valid");
    txtInput.classList.remove("invalid");
  } else {
    txtInput.classList.add("invalid");
    txtInput.classList.remove("valid");
  }
});
