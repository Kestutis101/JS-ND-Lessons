//todo 1.Sync/async.Susikurkite funkciją callingAPI(), kuri nenaudos parametrų.
//todo Funkcija savo viduje turi turėti setTimeout, kuris po 3s išlogintų į consolę, call failed‘.
//todo Taip pat sukurkite funkciją callingGoodAPI, kuri irgi neturės parametrų ir nustatys intervalą,
//todo kad kas 2s į consolę būtų parašoma‚call was successful‘. Apsirašę funkcijas,
//todo po jomis panaudokite žemiau pateiktą kodo fragmentą.
//todo console.log("Start");callingAPI();callingGoodAPI();console.log("Finish");
//todo Paanalizuokite ir pabandykite sau paaiškinti kaip veikia call stack, web API, callbackque irevent loop.

function callAPI() {
  setTimeout(() => console.log("call failed"), 3000);
}

function callGoodAPI() {
  setInterval(() => console.log("call was succsessful"), 2000);
}

// console.log("Start");
// callAPI();
// callGoodAPI();
// console.log("Finish");

//todo 2.Promises – then. Susikurkite naują promise, kuris generuoja "Math.random()" skaičių,
//todo ir jei gaunamas skaičius daugiau nei 0.25, darytų resolve su tekstu 'You have enough money for payphone'
//todo o jei mažiau - reject su tekstu 'Talk to yourself this time'
//todo Iškvieskite promise kelis kartus ir pažiūrėkite ar gaunate skirtingus variantus ir pavyksta
//todo juos išsiloginti naudojant .then ir .catch;

const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  console.log(randomNumber);
  if (randomNumber > 0.25) {
    resolve("You have enough money for payphone");
  } else {
    reject("Talk to yourself this time");
  }
});
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//todo 3.Promises – async/await. Perrašyti 2 užduotį, kad naudotų async/await.

const promise2 = async () => {
  try {
    const promise2 = await promise;
    const data = await promise2;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
promise2();

//todo Task 3 from previuos lecture

// const promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.25) {
//     resolve("Good");
//   } else {
//     reject("Bad");
//   }
// });

// const getMathValue = async () => {
//   try {
//     console.log(await promise);
//   } catch (e) {
//     console.log("Rejected with message: " + e);
//   }
// };

// getMathValue();
