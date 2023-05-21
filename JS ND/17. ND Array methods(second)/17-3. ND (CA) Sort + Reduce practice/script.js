const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

//! Task: 1

// console.log(people.filter((person) => person.age >= 18));

//! Task: 2

// console.log(people.filter((x) => x.age >= 18).map((person) => person.name));

//! Task: 3

// console.log(
//   people
//     .filter((x) => x.age >= 18)
//     .map((person) => person.name)
//     .sort()
// );

//! Task: 4

const drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "orange", price: 20 },
  { name: "bananajuice", price: 30 },
  { name: "applejuice", price: 40 },
];

function maxMinPrice(items) {
  items.sort((a, b) => a.price - b.price);
  return {
    pigiausias: items[0].name,
    brangiausias: items[items.length - 1].name,
  };
}
console.log(maxMinPrice(drinks));
