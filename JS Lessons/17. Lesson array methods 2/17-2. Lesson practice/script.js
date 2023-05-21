//! Task: 1.1

// const sumNums = [19, 5, 42, 2, -77];

// const sum = sumNums
//   .filter((arr) => (arr > 0 ? arr : null))
//   .reduce((sum, value) => sum + value);

// console.log(sum);

//! Task: 1.2

// const sumNums = [10, 343445353, 3453445, 3453545353453];

// const sum = sumNums.reduce((sum, value) => sum + value);
// console.log(sum);

//! Task: 1.3

// const sumNums = [2, 9, 6, -1];

// const sum = sumNums
//   .filter((arr) => (arr > 0 ? arr : null))
//   .reduce((sum, value) => sum + value);

// console.log(sum);

//! Task: 1.4

// const sumNums = [879, 953, 694, -847, 342, 221, -91, -723, 791, -587];

// const sum = sumNums
//   .filter((arr) => (arr > 0 ? arr : null))
//   .reduce((sum, value) => sum + value);

// console.log(sum);

//! Task: 1.5

// const sumNums = [3683, 2902, 3951, -475, 1617, -2385];

// const sum = sumNums
//   .filter((arr) => (arr > 0 ? arr : null))
//   .reduce((sum, value) => sum + value);

// console.log(sum);

//! Task: 2

// const sumNums = [5, 2, 4];

// let sum = sumNums
//   .filter((num) => num % 2 === 0)
//   .map((num) => num * num)
//   .reduce((num, value) => num + value);

// console.log(sum);

//! Task: 3.1

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const firstName = inventors.map((person) => person.first + " " + person.last);

// console.log(firstName);

//! Task: 3.2

const sortedByBirthDate = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

// console.log(sortedByBirthDate);

//! Task: 3.3

const bornIn1500 = inventors.filter(
  (current) => current.year > 1500 && current.year < 1600
);
// console.log(bornIn1500);

//! Task: 3.4

const totalLived = inventors.reduce(
  (total, current) => total + (current.passed - current.year),
  0
);

// console.log(totalLived);

//! Task: 3.5

const yearsLived = inventors.sort((a, b) =>
  a.passed - a.year > b.passed - b.year ? 1 : -1
);
console.log(yearsLived);
