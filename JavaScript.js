const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".eye");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");

/*SHOW/HIDE PASSOWRD AND CHANGE ICON*/
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";

        pwShowHide.forEach((icon) => {
          icon.name = "eye";
        });
      } else {
        pwField.type = "password";

        pwShowHide.forEach((icon) => {
          icon.name = "eye-off";
        });
      }
    });
  });
});

/*APPEAR SIGNUP AND LOGIN FORM*/
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
login.addEventListener("click", () => {
  container.classList.remove("active");
});
