const milkPrice = 10;
if (milkPrice === 10) {
  alert(`You don't need cents, you have to pay ${milkPrice}$`);
} else {
  alert(`You need cents ${milkPrice}$`);
}

const milkPrice2 = 10.5687;
const milkPriceFixed = milkPrice2.toFixed(2);
if (milkPrice2 === 10) {
  alert(`You don't need cents, you have to pay ${milkPrice2}$`);
} else {
  alert(`You need to pay ${milkPriceFixed}$`);
}

const h1 = document.createElement("h1");
const price = document.querySelector("#first");
const litres = document.querySelector("#sec");
document.body.append(h1);
const fullPrice = document
  .querySelector("form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    priceValue = price.value;
    litresValue = litres.value;
    const result = priceValue * litresValue;
    h1.textContent = `${result.toFixed(2)}$`;
  });
