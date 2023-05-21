//!Task: 1

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge() {
    if (this.age >= 18) {
      return `${this.name} is old enough to drink`;
    } else {
      return `${this.name} is not allowed to drink`;
    }
  }
}
const p1 = new Person("Petras", 18);
console.log(p1.compareAge());

//! Task: 2

const arr = [1, 5, "a", "g", "z", 6];

let returnNumbers = (number) => {
  if (typeof number === "number") {
    return number;
  }
};
let numbers = arr.filter(returnNumbers);
console.log(numbers);

//! Task: 3

function duplicateLetters(string) {
  let arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (/[a-zA-Z]/.test(arr[i])) {
      arr[i] = arr[i].repeat(2);
    }
  }
  return arr.join("");
}

console.log(duplicateLetters("Petras 123 Slekys"));

//! Task: 4

function checkPostalCode(code) {
  return /^[0-9]{5}|[0-9]{3}[A-Za-z]{2}$/.test(code);
}

console.log(checkPostalCode("123ab"));

//! Task: 5

const jazzify = (array) =>
  array.map((element) =>
    element.endsWith("7") ? element : element.concat("7")
  );
console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
console.log(jazzify([]));
