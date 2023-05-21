//! Functions

//? Function declaration
//declare function
function sayHello() {
  console.log("Hello, world ");
}

//call function
sayHello();

// function expression
//same with arrow function as above
const sayHelloArrow = () => {
  console.log("Hello, world arrow function");
};
sayHelloArrow();

/* Task 1
Create function with function declaration and arrow function, which:
Print you name last name. Do not pass parameters.
*/

function nameLastName() {
  const name = "Kestutis";
  const lastName = "Miceika";
  console.log(`your name ${name} and your last name ${lastName}`);
}

nameLastName();

const nameLastNameArrow = () => {
  const name = "Kestutis";
  const lastName = "Miceika";
  console.log(`your name ${name} and your last name ${lastName}`);
};

nameLastNameArrow();

//? Passing parameters
function getMyName(firstName, lastName) {
  return `You can call me ${firstName} ${lastName}`;
}

const fName = "Kestutis";
const myNameString = getMyName(fName, "Miceika");
console.log(myNameString);

//arrow function - the same as above
const getMyNameArrow = (firstName, lastName) =>
  `You can call me ${firstName} ${lastName}`;

console.log(getMyNameArrow(fName, "Miceika"));

/* Task 2
Create function (2 ways), which:
would get width, length and height as parameters and would
return volume of figure; (lets assume it is rectangle S = a * b * c)
console.log returned value
*/

function getRectangle(a, b, c) {
  return a * b * c;
}
console.log(getRectangle(2, 5, 4));

const getRectangleArrow = (a, b, c) => a * b * c;

console.log(getRectangleArrow(2, 5, 4));

//? Variable from outer scope
const temperatureInCelsius = 33;
function convertToFahrenheit() {
  return temperatureInCelsius * 1.8 + 32;
}

console.log(convertToFahrenheit());

const temperatureInCelsiusArrow = () => temperatureInCelsius * 1.8 + 32;

console.log(temperatureInCelsiusArrow());

//? Default parameters

function printMyNameWithDefault(firstName = "Kestutis", lastName) {
  return `your name ${firstName} and your last name ${lastName}`;
}

console.log(printMyNameWithDefault(undefined, "Miceika"));
console.log(printMyNameWithDefault("Tomas", "Miceika"));

const printMyNameWithDefaultArrow = (firstName = "Kestutis", lastName) =>
  `your name ${firstName} and your last name ${lastName}`;

console.log(printMyNameWithDefaultArrow(undefined, "Miceika"));
console.log(printMyNameWithDefaultArrow("Jonas", "Miceika"));

//? IIFE
(function sayGoodMorning() {
  console.log("Good morning");
})();

(function () {
  console.log("Good morning");
})();

(() => console.log("Good morning with arrow function"))();
