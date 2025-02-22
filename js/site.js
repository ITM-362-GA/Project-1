// The function that checks the form for errors before submitting.
function checkForm() {
  // Clearing any previous error messages.
  clearErrors();

  // Grabs the form field values.
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;

  let formIsValid = true;

  // Checks if the first name is empty.
  if (firstName === "") {
    showError("firstname", "First name is required.");
    formIsValid = false;
  }

  // Checks if the last name is empty.
  if (lastName === "") {
    showError("lastname", "Last name is required.");
    formIsValid = false;
  }

  // Checks if the email is empty or invalid.
  if (email === "") {
    showError("email", "Email is required.");
    formIsValid = false;
  } else if (!validateEmail(email)) {
    showError("email", "Please enter a valid email address.");
    formIsValid = false;
  }

  // If there are any errors were found, prevent form submission.
  return formIsValid;
}

// The function that shows the error messages.
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error");
  errorMessage.innerText = message;
  
  // Inserts the error message after the field.
  field.parentElement.appendChild(errorMessage);
}

// The function to clear all error messages.
function clearErrors() {
  // Removes the existing error messages.
  const errorMessages = document.querySelectorAll(".error");
  errorMessages.forEach(error => error.remove());
}

// The function to validate the email format.
function validateEmail(email) {
  // A regex for basic email validation.
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}