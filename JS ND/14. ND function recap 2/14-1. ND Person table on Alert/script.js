//? Task:

//? Create an HTML form that asks the user to enter their personal information,
//? including their name, age, gender, and address. The form should have the following elements:

//? A text input for the name
//? A number input for the age
//? A radio button group with options for male, female, and other for the gender
//? A text input for the address
//? A submit button
//? Use JavaScript to retrieve the values of the form elements when the submit button is clicked.
//? When the submit button is clicked, display an alert message with the information that the user entered in the following format:

//? "Name: [name]\nAge: [age]\nGender: [gender]\nAddress: [address]"

const nameInput = document.querySelector("input[name='name']");
const ageInput = document.querySelector("input[name='age']");
const genderInputs = document.querySelectorAll("input[name='gender']");
const addressInput = document.querySelector("input[name='address']");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let gender;
  for (let i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      gender = genderInputs[i].value;
      break;
    }
  }
  alert(
    `Name: ${nameInput.value}
 Age: ${ageInput.value}
 Gender: ${gender}
 Address: ${addressInput.value}`
  );
});
