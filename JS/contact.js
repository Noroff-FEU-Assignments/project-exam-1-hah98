const form = document.querySelector(".form");

function validateForm(event) {
  event.preventDefault();

  const names = document.querySelector("#names");
  const namesError = document.querySelector("#namesError");
  const subject = document.querySelector("#subject");
  const subjectError = document.querySelector("#subjectError");
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const adress = document.querySelector("#adress");
  const adressError = document.querySelector("#adressError");

  if (checkLength(names.value, 5) === true) {
    namesError.style.display = "none";
  } else {
    namesError.style.display = "block";
  }

  if (checkLength(subject.value, 10) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(adress.value, 25) === true) {
    adressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (
    checkLength(names.value, 5) &&
    checkLength(subject.value, 10) &&
    validateEmail(email.value) &&
    checkLength(adress.value, 25)
  ) {
    console.log("Yippy, Success!");
    alert("Thank you, Your question has been sent to our team!");
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
