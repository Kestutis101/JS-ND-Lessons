//? Create an HTML form that allows the user to select their favorite foods from a list of options.
//? The form should have the following elements:

//? A checkbox group with options for pizza, pasta, and sushi
//? A select element with options for fruit (apple, orange, banana) and vegetables (carrot, broccoli, potato)
//? A submit button
//? Use JavaScript to retrieve the values of the form elements when the submit button is clicked.
//? When the submit button is clicked, use the retrieved values to create
//? new HTML elements on the page that display the selected foods in a list format,
//? e.g. "You selected pizza, pasta, broccoli, and apple."

const checkboxGroup = document.querySelectorAll('input[type="checkbox"]');
const fruitVegetablesSelect = document.querySelector("select");
const h3 = document.createElement("h3");
const ul = document.createElement("ul");
const li = document.createElement("li");
const li2 = document.createElement("li");

document.body.append(h3, ul);

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  h3.textContent = "You selected:";
  let foods;
  let fruitVegetables;
  for (let i = 0; i < checkboxGroup.length; i++) {
    if (checkboxGroup[i].checked) {
      foods += checkboxGroup[i].value;
    }
  }
  for (let j = 0; j < fruitVegetablesSelect.length; j++) {
    if (fruitVegetablesSelect[j].selected) {
      fruitVegetables = fruitVegetablesSelect[j].value;
    }
  }
  ul.append(li, li2);

  li.textContent = foods;
  li2.textContent = fruitVegetables;
});
