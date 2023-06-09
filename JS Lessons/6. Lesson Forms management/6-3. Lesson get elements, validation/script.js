//! 1 get form object and elements

// console.dir(document.querySelector("form"));
// console.dir(document.forms[0]);
// console.dir(document.forms[0].elements);
// console.dir(document.forms[0].username);
// console.dir(document.querySelector("#username"));

//! 2 get values on submit
const form = document.querySelector("form");
form.addEventListener("submit", handleformSubmit);

function handleformSubmit(e) {
  e.preventDefault();
  //   console.dir(e.target);

  //! 3 get input values
  //   console.dir(document.querySelector("#username").value);

  //! 4 select

  const homeTownSelect = document.querySelector("#hometown");
  //   console.log(homeTownSelect.value);
  //   console.log(homeTownSelect.selectOptions);
  //   console.log(homeTownSelect.selectIndex);

  //! 5 checkbox
  const termsCheckbox = document.querySelector("#terms");
  //   console.dir(termsCheckbox);
  //   console.dir(termsCheckbox.checked);

  //! 8 simple validation scenario
  //   const username = document.querySelector("#username");
  //   const errorElements = document.querySelectorAll(".error");

  //   if (username.value === "") {
  //     errorElements[0].textContent = "Please enter a username";
  //     username.style.border = "2px solid red";
  //   } else {
  //     errorElements[0].textContent = "";
  //     username.style.border = "2px solid lightgrey";
  //   }

  //! 9 reusable validation
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const confirmpassword = document.querySelector("#confirmpassword");
  const hometown = document.querySelector("#hometown");
  const errorElements = document.querySelectorAll(".error");

  const validateInput = (input, errorElements, message) => {
    if (input.value === "") {
      errorElements.textContent = message;
      input.style.border = "2px solid red";
    } else {
      errorElements.textContent = "";
      input.style.border = "2px solid lightgrey";
    }
  };
  validateInput(username, errorElements[0], "Please enter a username");
  validateInput(email, errorElements[1], "Please enter a email");
  validateInput(password, errorElements[2], "Please enter a password");
  checkPassword(
    password,
    confirmpassword,
    errorElements[3],
    "Please confirm password"
  );
  validateInput(hometown, errorElements[4], "Please enter a hometown");
}

//! 6 focus and blur events
document
  .querySelector("#username")
  .addEventListener(
    "focus",
    (e) => (e.target.style.backgroundColor = "orange")
  );

document
  .querySelector("#username")
  .addEventListener("blur", (e) => (e.target.style.backgroundColor = "white"));

//! 7 change and input events

document.querySelector("#email").addEventListener("change", (e) => {
  document.querySelector("#emailError").textContent = e.target.value;
});
document.querySelector("#username").addEventListener("input", (e) => {
  document.querySelector("#usernameError").textContent = e.target.value;
});
//! 10 Task
//Sukurti dar viena input field index.html faile, kad vartotojas
//pakartotinai suvestu password ir pakartotinis password nesutampa
//tai atsiristu po repeat password laukeliu, kad 'Password don't match!'.

const checkPassword = (passwordInput, confirmInput, errorElements, message) => {
  if (passwordInput.value !== confirmInput.value) {
    errorElements.textContent = message;
    password.style.border = "2px solid red";
  } else {
    errorElements.textContent = "";
    passwordInput.style.border = "2px solid lightgrey";
  }
};
