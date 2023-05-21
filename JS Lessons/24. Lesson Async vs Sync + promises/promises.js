//! Promises - pazadai

// const promise = new Promise((resolve, reject) => {
//   if (false) {
//     setTimeout(resolve, 3000, "pazadas ivykdytas");
//   } else {
//     reject("nepavyko");
//   }
// });

// console.log(promise);

// setTimeout(() => console.log(promise), 4000);

//? .then consume promise

// promise.then((resultatas) => {
//   console.log(resultatas);
// });

//? promise .then chaining

// promise.then((res) => res + " viskas gerai").then((res2) => console.log(res2));

//? promise reject scenario
// promise
//   .then((resultatas) => {
//     console.log(resultatas);
//   })
//   .catch((err) => console.log(err));

// Promise.all - wait for all promises to finish

// const promise2 = new Promise((resolve) => {
//   setTimeout(resolve, 500, "start");
// });

// const promise3 = new Promise((resolve) => {
//   setTimeout(resolve, 1500, "second promise fullfilled");
// });

// const promise4 = new Promise((resolve) => {
//   setTimeout(resolve, 300, "last promise fullfilled");
// });

// Promise.all([promise2, promise3, promise4]).then((data) => console.log(data));

//? example with and without promise
// console.log(1);

// const waitFor = () => {
//   for (let i = 0; i < 10000000000; i++) {
//     (5 * 559) / 12;
//   }
//   return "Uff, that was tuff";
// };

// console.log(waitFor());

// console.log(3);

// console.log(1);

// const promiseTime = new Promise((resolve) => {
//   for (let i = 0; i < 10000000000; i++) {
//     (5 * 559) / 12;
//   }
//   resolve("Uff, that was tuff");
// });

// const result = promiseTime.then((response) => {
//   console.log(response);
// });
// console.log(3);

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((e) => console.error("error got in fetching post: " + e))
  .finally(() => console.log("fetching finished"));
