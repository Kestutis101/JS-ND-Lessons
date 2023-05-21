const number = document.querySelector("#firstinput");
number.addEventListener("input", convertToF);
const paragraph = document.querySelector("p");

function convertToF() {
  const temperature = number.value;
  const result = temperature * 1.8 + 32;
  paragraph.textContent = result.toFixed(1);
}
