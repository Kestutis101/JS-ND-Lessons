// const cars = ["BMW", "VW", "Audi"];

//! Task: 1
// cars.forEach((element) => {
//   console.log(element);
// });

//! Task: 2

// cars.forEach((vehicle, index) => console.log(index + ": " + vehicle));

//! Task: 3

let names = ["ruTa", "evA", "taDas", "MinDauGas"];
const newArr = names.map((name) => {
  const firstLetterUpperCase =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return firstLetterUpperCase;
});

// console.log(newArr);

//! Task: 4

let person = [
  { name: "ruTa", age: 19 },
  { name: "evA", age: 17 },
  { name: "taDas", age: 20 },
  { name: "MinDauGas", age: 14 },
];

// console.log(person.filter((person) => person.age >= 18));

//! Task: 5

let cities = ["Vilnius", "Kaunas", "Klaipeda", "Siauliai", "Panevezys"];

// console.log(cities.find((v) => v.charAt(0) === "K"));

//! Task: 6

console.log(cities.some((c) => c.charAt(0) === c.charAt(0).toLowerCase()));

//! Task: 7

console.log(cities.every((c) => c.charAt(0) === c.charAt(0).toUpperCase()));
