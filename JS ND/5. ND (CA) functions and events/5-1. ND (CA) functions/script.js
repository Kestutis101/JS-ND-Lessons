//! Task: 1 Ne visos funkcijos turi return statement (nors dažniausiai taip yra).
//! Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį.

// function printMyName() {
//   alert("Kestutis");
// }

// printMyName();

//! Task: 2 Ir ne visos funkcijos turi parametrus - sukurkite funkciją,
//! kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

// function randomNumber(min, max) {
//   let random = Math.floor(Math.random(min, max) * 5) + 1;
//   return random;
// }

// console.log(randomNumber(1, 5));

//! Task: 3 Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę -
//! ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

// function printMyName(myFirstName = "Kestutis", lastName = "Miceika") {
//   namelength = myFirstName.length + lastName.length;
//   console.log(`My name is ${myFirstName} ${lastName} ${namelength}`);
// }

//! Task: 4 Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.).
//!  Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]),
//! o funkcija paims pagal indeksą atitinkamą raidę. Jei primiršot array - pasižiūrėkite čia.

// function getLetterByIndex(index) {
//   const alphabet = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   return alphabet[index];
// }

// console.log(getLetterByIndex(2));

//! Task: 5

// function mathFunction(n1, n2, operator) {
//   switch (operator) {
//     case "sum":
//       return n1 + n2;
//     case "sub":
//       return n1 - n2;
//     case "div":
//       return n1 / n2;
//     case "multi":
//       return n1 * n2;
//   }
// }
// console.log(mathFunction(5, 2, "multi"));
//! Task: 6

function randomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function squareNumber(number) {
  return Math.pow(number, 2);
}

console.log(randomNumber(squareNumber()));
