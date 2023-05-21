// console.log("Hello world in external file");

/// variables  
///global variables
pirmaskintamasis = 2022;
console.log (pirmaskintamasis);

// var variables - function scoped
var secondVariable = 2023;
console.log(secondVariable);

// let variable - block scoped
let thirdVariable = 'Christmas';
console.log('Christmas');

{
    let firstname  = 'Marijus';
    console.log(firstname);
}


//const variable -block scoped constant
const season = 'Winter';
// season = 'Summer';
console.log (season);

//! basic data types
//String
const workplace = 'CodeAcademy';
console.log(workplace);
const groupName = "CAFE04";
console.log(groupName);
const totalName = `Total name is :${workplace} ${groupName}`;
console.log (totalName);

//Number 
const currentYear = 2022;
const temperature = 3.77;

console.log(currentYear);
console.log(temperature);

//Boolean
const isDark = false;

console.log(isDark);

//Array - duomenu rinkinys

const colors = ['red', 15, true];

console.log(colors);

//Object
const car = {
    color:'blue',
    model: 'Audi',
    year: 2022,
    isFrontWheelDriven: true,
};
console.log(car);
console.log(car.color);
console.log(car.year);


//typeof pasako kokiai grupeje buvo sukurtas kintamasis
console.log(typeof car);
console.log(typeof workplace);
console.log(typeof isDark);


//Basic operators

const a = 10;
const b = 3;
const sum = a + b;
console.log(sum);

const diference = a - b;
console.log(diference);

const multiplication = a * b;
console.log(multiplication);

const subtraction  = a / b;
console.log(subtraction);

const remainder = a % b;
console.log(remainder);

// alert('Hello i am first Alert');
// alert(55);

// let answer = confirm('Are you adult?');
// console.log (answer);

let promptAge = prompt('What your age?', 18);
console.log(promptAge);

const first = 3;
const second = first;
console.log(second);



