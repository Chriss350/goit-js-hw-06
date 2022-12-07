const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    const alertMsg = "Uzupełnij wszystkie pola formularza";
    return alert(alertMsg);
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };
    console.log(userData);
    event.currentTarget.reset();
  }
};

form.addEventListener("submit", handleSubmit);
