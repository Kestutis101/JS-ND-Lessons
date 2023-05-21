const nameInput = document.querySelector('input[name="name"]');
const ageInput = document.querySelector('input[name="age"]');
const emailInput = document.querySelector('input[name="email"]');

const colorInputs = document.querySelectorAll('input[name="color"]');
console.log(colorInputs);

const carSelect = document.querySelector("select");
console.log(carSelect);

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(nameInput.value);
  console.log(ageInput.value);
  console.log(emailInput.value);

  console.log(colorInputs[0].checked); // boolean reiksme grazina false or true
  console.log(carSelect.value);
});
