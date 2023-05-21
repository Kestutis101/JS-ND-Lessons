//! Task: 1

const favNumbs = [3, 9, 13, 25, 31];

console.log(favNumbs.reduce((acc, value) => acc + value, 0));

//! Task: 2

const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

console.log(
  cars.reduce((acc, value) => (value.length === 3 ? acc + 1 : acc), 0)
);

//! Task: 3

const array = [1, 8, 10, 84, 256, 579, 222, 247];

console.log(array.reduce((acc, value) => (acc > value ? acc : value)));
