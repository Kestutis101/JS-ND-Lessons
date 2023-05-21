// Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n.
// Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš daug mažų L raidžių).
// t.y. jei kviesite funkciją fn(4), tai turėtų atspausdinti tokį rezultatą:
// L
// L
// L
// L L L L

// const height = 5;

// function drawL(n) {
//   let i = 0;
//   for (let i = 0; i < n; i++) {
//     console.log("L");
//     if (i == n - 1) {
//       let lastLine = "";
//       for (let j = 0; j < n; j++) {
//         lastLine += "L";
//       }
//       console.log(lastLine);
//     }
//   }
// }

// drawL(height);

// Sukurkite panašią funkciją, kuri atspausdintų C raidę.
// t.y. jei kviesite funkciją fn(5), tai turėtų atspausdinti tokį rezultatą:
// CCCCC
// C
// C
// C
// CCCCC

// const height = 5;
// const anotherHeight = 3;

// function drawC(fn4, fn5) {
//   const i = 0;
//   for (let i = 0; i < fn4; i++) {
//     if (i == fn4 - 1) {
//       let lastLine = "";
//       for (let j = 0; j < fn4; j++) {
//         lastLine += "C";
//       }
//       console.log(lastLine);
//     }
//   }
//   const o = 0;
//   for (let o = 0; o < fn5; o++) {
//     console.log("C");
//   }
//   for (let i = 0; i < fn4; i++) {
//     if (i == fn4 - 1) {
//       let lastLine = "";
//       for (let j = 0; j < fn4; j++) {
//         lastLine += "C";
//       }
//       console.log(lastLine);
//     }
//   }
// }

// drawC(height, anotherHeight);

// Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event),
// vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
// Pvz.: Petras, Jonas, Mantas, Antanas.

// const names = document.querySelector("input:first-child");
// const paragraph = document.querySelector("p");

// names.addEventListener("blur", () => {
//   const named = names.value;
//   paragraph.textContent = named + `, ${named}, ${named}, ${named}.`;
// });

// Sukurkite formą su dviem inputais, kurie paims skaičius.
// Suvedus duomenis - turi alert'int skaičių, kuris arčiausiai 100.
// Pvz.: fn(101, 81) grąžins 101.

// function alertNearestNumber(n1, n2) {
//   if (Math.abs(100 - n1) > Math.abs(100 - n2)) {
//     alert(n2);
//   } else {
//     alert(n1);
//   }
// }

// function handleFormSubmit(event) {
//   event.preventDefault();
//   const n1 = Number(document.querySelector("#number1").value);
//   const n2 = Number(document.querySelector("#number2").value);
//   alertNearestNumber(n1, n2);
// }

// document.querySelector("form ").addEventListener("submit", handleFormSubmit);

// Sukurkite programą, kurioje pakrovus puslapį susigeneruoja skaičius tarp 1 ir 5.
// Vartotojas turi formą su vienu input - gali spėti skaičių. Atspėjus - išmeta alert(atspejai),
// kitaip alert(neatspejai).

// let randomNumber = Math.floor(Math.random() * 5) + 1;
// console.log(randomNumber);

// function guessNumber(e) {
//   e.preventDefault();
//   const userInputNumber = Number(document.querySelector("#uzd5").value);
//   if (randomNumber === userInputNumber) {
//     alert("Jus atspejote!");
//   } else {
//     alert("Neatspejote.");
//   }
// }

// document.querySelector("#uzd5").addEventListener("change", guessNumber);

//Pakoreguokite penktą pratimą, kad skaičiuotų iš kelinto karto atspėjai ir tai parašytų alert'e.

const randomNumber = Math.floor(Math.random() * 5) + 1;
console.log(randomNumber);
counter = 0;

function guessNumber(e) {
  e.preventDefault();
  counter++;
  const userInputNumber = Number(document.querySelector("#uzd5").value);
  if (randomNumber === userInputNumber) {
    alert(`Atspejote is ${counter} karto`);
  } else {
    alert("Neatspejai.");
  }
}

document.querySelector("#uzd5").addEventListener("change", guessNumber);
