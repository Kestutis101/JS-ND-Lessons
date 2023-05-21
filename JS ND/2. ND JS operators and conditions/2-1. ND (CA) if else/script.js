//! Task 1:

// const legalAge = 20;
// let clientAge = 22;

// if (clientAge < legalAge) {
//   console.log("Your age is not legal");
// } else {
//   console.log("Your age is legal");
// }

//! Task 2:

// const names = "Kestutis";
// console.log(`${names} ${names.length}`);

//! Task 3:

// const age = prompt("enter your age");

// if (age > 100 || age < 0) {
//   console.log("invalid age");
// } else if (age < 18) {
//   console.log("Child");
// } else {
//   console.log("Adult");
// }

//! Task 4:

const car = prompt("Please Enter a car manufacturer");

if (
  ["VW", "Audi", "Bentley", "Bugatti", "Lamborghini", "Porsche"].includes(car)
) {
  console.log("Your Car manufacturer is VW Group");
} else if (["BMW", "Mini", "Rolls-Royce"].includes(car)) {
  console.log("Your car manufacturer is BMW Group");
} else {
  console.log("Unknown manufacturer");
}
