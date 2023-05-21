//! H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano,
//! dvigubai didesniu font'o dydžiu ir raudona spalva.

// document.querySelector("h1").addEventListener("click", () => {
//   document.querySelector("h1").style.cssText =
//     "0 auto; width 100vh; text-align: center; font-size: 2rem; color: red";
// });

//! Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite,
//! kad mygtukas position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko,
//! jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę.
//! Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

// const button = document.querySelector("button");
// button.style.cssText = "position:absolute; top:0; left:0;";

// let originalPosition = true;

// function changePosition(e) {
//   e.target.style.cssText = originalPosition
//     ? "position:absolute; bottom:0; right:0;"
//     : "position:absolute; top:0; left:0;";
//   originalPosition = !originalPosition;
// }

// button.addEventListener("click", changePosition);

//! Pakoreguokite antrą pratimą, kad mygtukas suktųsi ratu - laikrodžio rodykle.

// const button = document.querySelector("button");
// button.style.cssText = "position:absolute; top:0; left:0;";

// let corner = 0;
// const cornerMove = [
//   "position:absolute; top:0; right:0;",
//   "position:absolute; bottom:0; right:0;",
//   "position:absolute; bottom:0; left:0;",
//   "position:absolute; top:0; left:0;",
// ];
// function changePosition(e) {
//   if (corner < cornerMove.length) {
//     e.target.style.cssText = cornerMove[corner];
//     corner++;
//   }
//   if (corner === cornerMove.length) {
//     corner = 0;
//   }
// }

// button.addEventListener("click", changePosition);

//! Sukurkite input elementą (formos ar mygtuko nereikia),
//! kur vartotojas galės įrašyti savo vardą. Kai rašo - keičiasi puslapio stilius.
//! Jei įrašytos yra du simboliai arba mažiau - viso puslapio fonas raudonas.
//! Jei daugiau nei du simboliai - puslapio fonas žalias.

// const userName = document.querySelector("input");
// function changeBackground(e) {
//   const userName = e.target.value;
//   document.body.style.backgroundColor = userName.length < 3 ? "red" : "green";
// }

// userName.addEventListener("blur", changeBackground);

//! Sukurkite mygtuką HTML'e.
//! O su JS pasirašykite array su keturiom spalvom (["red", "green", "blue", "yellow"]).
//! Paspaudus ant mygtuko - tegul jo spalva pasikeičia į atsitiktinę spalvą.

// const colors = ["red", "green", "blue", "yellow"];

// document.querySelector("button").addEventListener("click", (e) => {
//   const randomIndex = Math.round(Math.random() * 4);
//   e.target.style.backgroundColor = colors[randomIndex];
// });

//! Pasikoreguokime penktą pratimą - šį kartą array nereikės, keisime RGB spalvas.
//! Paspaudus ant mygtuko, susigeneruoja trys random skaičiai (nuo 0 iki 255, imtinai),
//! šie skaičiai atvaizduoja spalvų paletę (red, green, blue => RGB). Padarykite, kad paspaudus ant mygtuko,
//! jo fono spalva pasikeistų į atsiktinę spalvą pagal RGB paletę.

document.querySelector("button").addEventListener("click", (e) => {
  const randomRed = Math.round(Math.random() * 255) + 1;
  const randomGreen = Math.round(Math.random() * 255) + 1;
  const randomBlue = Math.round(Math.random() * 255) + 1;

  e.target.style.backgroundColor = colors[(randomRed, randomGreen, randomBlue)];
});
function generateRandomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`;
  }
  
  document.querySelector('button').addEventListener('click', event => {
    event.target.style.backgroundColor = generateRandomColor();
  });
  