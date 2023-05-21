//? Task:

//? Create an HTML form that asks the user to enter their name, email address, and favorite color.
//? The form should have the following elements:
//? A text input for the name
//? An email input for the email address
//? A radio button group with options for red, green, and blue as the favorite color
//? A submit button
//? Use JavaScript to retrieve the values of the form elements when the submit button is clicked.
//? When the submit button is clicked, display an alert message with the name, email, and favorite color that the user entered.

// const nameInput = document.querySelector('input[name="name"]');
// const emailInput = document.querySelector('input[name="email"]');
// const colorInputs = document.querySelectorAll('input[name="color"]');

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = nameInput.value;
//   const email = emailInput.value;
//   let color;

//   for (let index = 0; index < colorInputs.length; index++) {
//     if (colorInputs[index].checked) {
//       color = colorInputs[index].value;
//       break;
//     }
//   }
//   alert
//   (`name = ${name}
//   email = ${email}
//   favorite color = ${color ? color : "no color is selected"}`);
// });

//? Task:

//? Create an HTML form that asks the user to select their favorite foods from a list of options. The form should have the following elements:

//? A checkbox group with options for pizza, pasta, and sushi
//? A select element with options for fruit (apple, orange, banana) and vegetables (carrot, broccoli, potato)
//? A submit button
//? Use JavaScript to retrieve the values of the form elements when the submit button is clicked.
//? When the submit button is clicked, display an alert message with the selected foods in a list format, e.g. "You selected pizza, pasta, broccoli, and apple."

const checkboxGroup = document.querySelectorAll('input[type="checkbox"]');
const fruitVegetablesSelect = document.querySelector("select");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let res = "You selected";
  for (let i = 0; i < checkboxGroup.length; i++) {
    if (checkboxGroup[i].checked) {
      res += ` ${checkboxGroup[i].value}`;
    }
  }

  res += ` ${fruitVegetablesSelect.value}`;
  alert(res);
});
