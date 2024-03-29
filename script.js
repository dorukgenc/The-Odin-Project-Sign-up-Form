const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const wrongPass = document.querySelector(".wrongPass");

confirmPassword.addEventListener("input", function () {
  if (password.value !== confirmPassword.value) {
    password.setCustomValidity("Passwords do not match");
    confirmPassword.setCustomValidity("Passwords do not match");
    wrongPass.style = "display: block;";
  } else {
    password.setCustomValidity("");
    confirmPassword.setCustomValidity("");
    wrongPass.style = "display: none;";
  }
});
