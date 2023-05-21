//! 1. Sukurkite kino teatro kainos apskaičiavimo platformą.
//! Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių,
//! o JS apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu,
//! iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60.
//! Variable turi būti aprašyti viršuj, kad būtų lengva keist.
const normalPrice = 6;
const priceForSixteens = 3;
const priceForSeniors = 4;
document.querySelector("form").addEventListener("submit", checkPrice);

function checkPrice(e) {
  const result = document.querySelector(".age").value;
  e.preventDefault();
  if (result < 16) {
    document.querySelector(
      "h1"
    ).textContent = `jusu kaina yra - ${priceForSixteens}`;
  } else if (result > 60) {
    document.querySelector(
      "h1"
    ).textContent = `jusu kaina yra - ${priceForSeniors}`;
  } else {
    document.querySelector(
      "h1"
    ).textContent = `jusu kaina yra - ${normalPrice}`;
  }
}

//! 2. Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio įrašo. Sukurk programą,
//! kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente).
//! Hint: pasirinkite su querySelector tik pažymėtą radio input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.

const userInputAge = document.querySelector("#age");
const check = document.querySelector("#checkbox");
const sumbit = document
  .querySelector("button")
  .addEventListener("click", lookForCheck);

function lookForCheck(e) {
  e.preventDefault();
  const age = Number(userInputAge.value);
  const isConvicted = check.checked;
  if (age >= 18 && age <= 30 && !isConvicted) {
    document.querySelector("h1").textContent = "Jums reikia i kariuomenę";
  } else {
    document.querySelector("h1").textContent = "Jums nereikia i kariuomenę";
  }
}
