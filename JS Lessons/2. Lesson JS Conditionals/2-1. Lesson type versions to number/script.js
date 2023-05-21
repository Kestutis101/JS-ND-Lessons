//?type versions
//?to number

// const age = prompt('Enter age:');
// console.log(typeof age);

// const ageAsNumber = Number(age);
// console.log(typeof ageAsNumber);

console.log(Number("a"));

console.log(parseFloat("2.22"));
console.log(parseFloat("2.22 asdasdasdasd"));
console.log(parseFloat("asasd 2.22 asdasdasdasd"));

console.log(parseInt("2.22"));
console.log(parseInt(true));

// const age = +prompt('Enter age:');

// const ageAsNumber = +age;
// console.log(typeof age);

//? to string
const temperature = 5;
console.log(typeof temperature);
// String(temperature);
console.log(typeof String(temperature));
// console.log(typeof temperature.toString());

//? Numbers and strings from BooLean

console.log(typeof String(true));
console.log(Number(false));

//? automatic conversions

console.log("3" + 4);
console.log("3" - 4);
console.log("3" - true);
console.log("3" + false);

console.log("Marijus" + "Romanovas");
const lastName = "Romanovas";
console.log(`Marijus ${lastName}`);

//? operators
//?Assignment operators

const a = 5;

let b = 2;
b += 5;

// the same as above     b += 5;
console.log(b);

b -= 2;
b /= 2;

//? comparison operators

console.log(1 == "1");
console.log(1 === "1");
console.log(1 !== "1");
console.log(1 > 2);
console.log(1 >= 1);

console.log("C" > "A");

//? increment/decrement operators

let number = 1;
number++;
console.log(number);
number--;
console.log(number);
--number;
console.log(number);

//? logical operators

console.log(true && true && true);
console.log(true || false);
console.log(!true);

console.log(Boolean("Cat"));
console.log(3 == 4);
