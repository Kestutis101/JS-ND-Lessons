//? Ir dar viena užduotis:
//? patobulinti pirmą užduotį kurią darėm - padaryti,
//? kad rezultatas būtų atvaizduotas ne alerte,
//? o kaip html elementas, tai prisiminsit ir document.createElement

const nameInput = document.querySelector('input[name="name"]');
const ageInput = document.querySelector('input[name="age"]');
const emailInput = document.querySelector('input[name="email"]');

const colorInputs = document.querySelectorAll('input[name="color"]');

const carSelect = document.querySelector("select");
const h1 = document.createElement("h1");
document.body.append(h1);

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let color;
  for (let i = 0; i < colorInputs.length; i++) {
    if (colorInputs[i].checked) {
      color = colorInputs[i].value;
      break;
    }
  }
  console.log(h1);
  h1.textContent = `
Name: ${nameInput.value}
Age: ${ageInput.value}
Email: ${emailInput.value}
Color: ${color}
Carselect: ${carSelect.value}`;
});
