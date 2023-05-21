// Sukurti inputą kuris priimą skaičių
// parašyti funkciją kuri grąžina ar įvestas skaičius yra tarp 50 ir 99 (Inclusive)

const userInput = document.querySelector("input");
const paragraph = document.querySelector("p");

userInput.addEventListener("change", () => {
  const enteredNumber = userInput.value;
  if (enteredNumber >= 50 && enteredNumber <= 99) {
    paragraph.textContent = enteredNumber + " is in a range between 50 and 99";
  } else {
    paragraph.textContent =
      enteredNumber + " is not in a range between 50 and 99";
  }
});
