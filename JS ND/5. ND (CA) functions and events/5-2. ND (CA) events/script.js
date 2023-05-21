//! Task: 1 Padaryk, kad paspaudus ant mygtuko - išoktų alert su tavo vardu! (naudoti inline metoda: onclick="")

// function myName() {
//   alert("Kestutis");
// }

//! Task: 2 Perrašyti pirmą pratimą su addEventListener (ir nuo šiol naudoti būtent jį ;) ).

// document.querySelector("button").addEventListener("click", myName);

// function myName() {
//   alert("Kestutis");
// }

//! Task: 3 Padaryti, kad paspaudus ant mygtuko, po apačia atsirastų paragrafe tekstas apie jus.

// document.querySelector("button").addEventListener("click", myName);

// function myName() {
//   document.querySelector("p").textContent =
//     "As Esu Kestutis, Mano Pavarde Miceika";
// }

//! Task: 4 Sukurk programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas. Paspaudus ant mygtuko, skaičius padidėja (+1).

// let number = 0;
// document.querySelector("button").addEventListener("click", counter);

// function counter() {
//   number++;
//   document.querySelector("h1").textContent = number;
// }

//! Task: 5 Sukurk programą, kurioje ilgas paragrafas. Bandant kopijuoti kodą - išmeta, kad negalima kopijuoti.

// document.querySelector("p").addEventListener("copy", () => {
//   alert("don't copy this text");
// });

//! Task: 6 Sukurk programą, kur paspaudus ant mygtuko - sugeneruoja random skaičių nuo 1 iki 100
//todo ir jį išmeta kaip h1 tekstą.

// document.querySelector("button").addEventListener("click", () => {
//   const number = Math.floor(Math.random() * 100) + 1;
//   document.querySelector("h1").textContent = number;
// });

//! Task: 7 Sukurk programą, kurioje du mygtukai - "Turiu bent 18 metų" ir "Mažiau nei 18 metų".
//todo Jei paspaudžia ant pirmo mygtuko - išmeta h1 tekstą "Alus".
//todo Jei antrą paspaudžia - išmeta alert su "nepilnametis - nieko neturim".

// document.querySelector("button:first-child").addEventListener("click", () => {
//   document.querySelector("h1").textContent = "Alus";
// });

// document.querySelector("button:last-of-type").addEventListener("click", () => {
//   document.querySelector("h1").textContent = "Nepilnametis - nieko neturim";
// });

//! Task: 8 Sukurk programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis.
//todo Vartotojas skaičiaus nemato (bet jūs pasiconsole'inkit). Ekrane - trys mygtukai (1, 2, 3).
//todo Vartotojas turi spėti koks random skaičius susigeneravo.
//todo Jei atspėja - išoka alert("Yay"), jei ne - alert("Nay").

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 3) + 1;
// }
// const randomNumber = generateRandomNumber();
// console.log(randomNumber);

// document
//   .querySelector("#one")
//   .addEventListener("click", () =>
//     randomNumber === 1 ? alert("Yay") : alert("Nay")
//   );
// document
//   .querySelector("#two")
//   .addEventListener("click", () =>
//     randomNumber === 2 ? alert("Yay") : alert("Nay")
//   );
// document
//   .querySelector("#three")
//   .addEventListener("click", () =>
//     randomNumber === 3 ? alert("Yay") : alert("Nay")
//   );

//! Task: 9 Parašykite programą, kurioje būtų tekstas "Nespauskite mygtuko".
//todo Vartotojui paspaudus bet kokį mygtuką turi pasikeisti tekstas į "Neklausote manęs".

// document.querySelector("button").addEventListener("click", () => {
//   document.querySelector("button").textContent = "Neklausote manęs";
// });

//! Task: 10 Sukurkite h1, jam duokite 150vh aukštį ir 150vh line-height.
//todo Jame įrašykite "Nejudinkite pelytės".
//todo Jeigu vartotojas pajudins pelytę - pakeiskite tekstą į "Kiek galima neklausyti?!".

document.querySelector("h1").addEventListener("mousemove", () => {
  document.querySelector("h1").textContent = "Kiek Galima neklausyti?!";
});
