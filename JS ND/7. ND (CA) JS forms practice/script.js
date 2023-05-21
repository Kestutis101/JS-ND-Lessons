//Task: 1 Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų.
// Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų).
// O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų).
// Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje,
// input elementu - atsirastų tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų".

const userInput = document.querySelector("input");
document.querySelector("button").addEventListener("click", calcReward);

function calcReward(e) {
  e.preventDefault();
  const userWorkedAge = Number(userInput.value);
  let bonus = 50;
  if (userWorkedAge >= 10) {
    bonus += 50;
  }
  if (userWorkedAge >= 20) {
    bonus += 100;
  }
  document.querySelector("h1").textContent = `Jusu premija: ${bonus}`;
}

//Task: 2 Kiek dienų šiais metais?
// Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai?
// Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400,
// kad būtų keliamieji Tai - populiari užduotis, tad internete rasite ne vieną versiją,
// ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

function checkLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " Keliamieji metai");
  } else {
    console.log(year + " Nekeliamieji metai");
  }
}
const year = prompt("Iveskite metus:");

checkLeapYear(year);
