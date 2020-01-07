const form = document.getElementById("form");
const email = document.querySelector("input");
const button = document.querySelector("button");

form.addEventListener("submit", submitEmail);

// submit email if valid input
function submitEmail(e) {
  if (email.value.trim() == "") {
    //show error
    showError("Whoops! It looks like you forgot to add your email.");

    // highligth the input
    email.style.borderColor = "hsl(354, 100%, 66%)";
  }
  else if (!validateEmail(email.value)) {
    // show error
    showError("Please provide a valid email address");

    // highligth the input
    email.style.borderColor = "hsl(354, 100%, 66%)";
    //email.value.innerText = "email@email/com";
  } 
  e.preventDefault();
}

// validate email with RegEx
function validateEmail(emailField) {
  let regEx = /\S+@\S+\.\S+/;
  return regEx.test(emailField);
}

// show error
function showError(error) {
  // create a div
  const errorDiv = document.createElement("div");

  // add class
  errorDiv.className = "alert";

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above button
  form.insertBefore(errorDiv, button);

  // clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// clear error
function clearError() {
  document.querySelector(".alert").remove();
  email.style.borderColor = "hsl(223, 100%, 88%)";
}