//! Task: 1

function seconds(number) {
  return String(number * 60) + " seconds";
}
console.log(seconds(3));

//! Task: 2

function personAgeInYears(age) {
  return Math.floor(age * 365);
}
console.log(personAgeInYears(20));

//! Task: 3

const arrowFn = (num) => num * num;
console.log(arrowFn(5));

//! Task: 4

const arrowFn2 = (height, width) => (height * width) / 2;
console.log(arrowFn2(10, 10));

//! Task: 5

function fnStringReturnLastLetter(string) {
  return string.charAt(string.length - 1);
}

console.log(fnStringReturnLastLetter("Petras"));

//! Task: 6

function fnReverseString(string) {
  return string.toLowerCase().split("").reverse().join("");
}

console.log(fnReverseString("Petras"));

//! Task: 7

const number = [-1, -100, -5, 10, 0, 11];

function getNegativeNumber(numbers) {
  return numbers.filter((number) => number < 0).sort((a, b) => b - a)[0];
}

console.log(getNegativeNumber(number));

//! Task: 8

const numberArray = [1, 6, 3];

function getAnotherArrayTheSameAmount(arr) {
  const newArray = arr.map((element) => element);
  return newArray;
}

console.log(getAnotherArrayTheSameAmount(numberArray));
