const form = document.getElementById("form");
const email = document.getElementById("email");
const button = document.querySelector("button");
const placeholder = document.querySelector("input[placeholder]");

form.addEventListener("submit", submitEmail);

// submit email if valid input
function submitEmail(e) {
  if (email.value.trim() == "") {
    //show error
    showError("Whoops! It looks like you forgot to add your email.");
    highlight(); 
  }
  else if (!validateEmail(email.value)) {
    // show error
    showError("Please provide a valid email address");
    highlight();     
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
  placeholder.style.color = "hsl(223, 100%, 88%)";
}

// hightlight input and add an example to input field
function highlight() {
  email.style.borderColor = "hsl(354, 100%, 66%)";
  email.value = "";
  email.placeholder = "email@example.com";
  placeholder.style.color = "#000";
}
