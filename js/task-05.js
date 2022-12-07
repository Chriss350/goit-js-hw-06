const txtInput = document.querySelector("#name-input");
const txtOutput = document.querySelector("#name-output");

txtInput.addEventListener("input", (event) => {
  if (event.currentTarget.value.length === 0) {
    return (txtOutput.textContent = "Anonymous");
  }
  txtOutput.textContent = event.currentTarget.value;
});
