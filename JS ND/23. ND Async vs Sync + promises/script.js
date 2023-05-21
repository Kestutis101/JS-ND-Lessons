//todo Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!"

// const promise = new Promise((resolve, reject) => {
//   resolve(setTimeout(() => {
//   }, 5000));
// });
// promise.then(() => alert("Veikia"));

//todo Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė,
//todo kad po 5 sekundžių bus reject.

// const promise = new Promise((resolve, reject) => {
//   const random = Math.floor(Math.random() * 5) + 1;

//   setTimeout(() => {
//     if (random === 1) {
//       reject();
//     } else {
//       resolve();
//     }
//   }, 5000);
// });

// promise
//   .then(() => alert("Veikia"))
//   .catch(() => alert("Oops, pažadas buvo atmestas"));

//todo Then bendrauja su kitu then. Pakoreguokite antrą pratimą,
//todo kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę
//todo "this is a message", šią žinutę pagauna antrasis then() ir ją alertina.
//todo Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą.
//todo Nelabai aišku? Pasižiūrėk čia apie teoriją - o jei ne, užmesk akį į atsakymus.

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;

  setTimeout(() => {
    if (random === 1) {
      reject();
    } else {
      resolve();
    }
  }, 5000);
});

promise
  .then(() => "this is a message")
  .then((message) => {
    alert(message);
  })
  .catch(() => alert("Oops, pažadas buvo atmestas"));
