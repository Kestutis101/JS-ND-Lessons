// console.log("first line of code");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("promise happened");
//     resolve("some data");
// reject();
//   }, 2000);
// });

// myPromise
//   .then((data) => {
//     console.log("first then", data);
//     return "some processed data";
//   })
//   .then((data) => {
//     console.log("second then happened", data);
//     return "some more data";
//   })
//   .then((data) => {
//     console.log("third then happened", data);
//   })
//   .catch((err) => {
//     console.log("catch happened", err);
//   })
//   .finally((data) => {
//     console.log("finally happened", data);
//   });

// //? in progress
// //! rejected
// //! resolved

// console.log("end of code");

const mainElement = document.querySelector("main");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const img = document.createElement("img");
      img.src = element.url;
      mainElement.append(img);
    });
  })
  .catch((err) => {
    console.log("error happened"), err;
  });
