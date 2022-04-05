function myFunction() {
  const email = document.getElementById("email");
  
  email.addEventListener('keyup', function (event) {
    isValidEmail = email.checkValidity();
    console.log(isValidEmail);

  if ( isValidEmail ) {
    document.getElementById("invalid").style.visibility = "hidden";
    document.getElementById("invalid-msg").style.visibility = "hidden";
  } else {
    document.getElementById("invalid").style.visibility = "visible";
    document.getElementById("invalid-msg").style.visibility = "visible";
  }
})};

myFunction();