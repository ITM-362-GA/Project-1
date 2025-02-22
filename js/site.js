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
