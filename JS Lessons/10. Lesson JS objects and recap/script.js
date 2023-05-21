// const kazkas = 5;

// const name = "bet ka kas cia bus yra string";
// const js = `Cia galima ideti javascripta ${2 + 2} ${
//   kazkas > 6 ? "teisingai" : "neteisingai"
// }`;
// console.log(js);

// const number = 6;

// const boolean = true; // arba false

// console.log(boolean);

// if (boolean) {
//   //reiksme arba true, false
//   console.log("teisybe");
// }

// const arr = [2, "kazkoks", true, [1, 2, 3]];

// console.log(arr[3]);

// arr[2] = "kazkas kito";

// console.log(arr);

// function sayStuff() {
//   console.log("stuff");
// }

// const obj = {
//   skaicius: kazkas,
//   name: "Marius",
//   lastName: "Matu",
//   age: 26,
//   sayhello: () => {
//     console.log("hello");
//   },
//   sayBye: function () {
//     console.log("bye");
//   },
//   sayKazkas: sayStuff,
//   innerObject: {
//     name: "Tadas",
//     goingDeeper: {
//       name: "kazkas",
//     },
//   },
// };

// console.log(obj.name);

// obj.sayhello();
// obj.sayBye();
// obj.sayKazkas();

// obj.name = "Tomas";

// obj.hasCat = false;

// delete obj.name;

// console.log(obj.name);

// obj.innerObject.goingDeeper.name = "Egle";

// console.log(obj.innerObject.goingDeeper.name); //galima taip vaikscioti per objektus

// const person = {
//   name: "vardas",
//   lastName: "pavarde",
//   bankID: "",
// };

// console.log(document.getElementById(elementId));

// const name = "asdf"; // priskirti

// // == or === patikrina tipa ir reiksme (===)

// if (!false) {
//   console.log("true");
// }

// let test = 4;

// test = !!test;
// console.log(test);

// FALSY VALUES: 0, "", null, undefined

// let name = !!"";

// if (6 > 10) {
//   console.log("true");
// } else if (6 > 5) {
//   console.log("false");
// } else {
//   console.log("Super false");
// }

// if (name) {
//   console.log(name);
// } else {
//   console.log("no name");
// }

// switch (14) {
//   case 15:
//     console.log("Musu reiksme yra 15");
//     break;
//   case 10:
//     console.log("Musu reiksme yra 10");
//     break;
//   case 12:
//   case 13:
//     console.log("Musu reiksme yra 12 arba 13");
//     break;

//   default:
//     console.log("Default");
//     break;
// }

// if (5 > 10) {
//   console.log("teisybe");
// } else {
//   console.log("neteisybe");
// }

// 5 > 10 ? console.log("teisybe") : console.log("neteisybe");

// alert("kazkas");
// const number = prompt("Ivesk skaiciu");
// console.log(number);
// const numberTwo = confirm("Ivesk skaiciu");
// console.log(numberTwo);

// console.log(Math.floor(5.5));
// console.log(Math.round(5.5));
// console.log(Math.min(5, 6, -3, -100));

// console.log(Number.parseInt("asdf123sadf"));
// console.log(typeof "123");

// console.log(new Date().getFullYear());

// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i > 10);

// const firstDiv = document.getElementById("pirmas");
// console.log(firstDiv);

// const allDivs = document.querySelectorAll("div");
// console.log(allDivs);

// const paragraph = document.querySelector("p");
// console.log(paragraph);

// const blueDiv = document.querySelector("blue");
// console.log(blueDiv);

// const pirmasDiv = document.querySelector("#pirmas");
// console.log(pirmasDiv);

// document.querySelector("button").addEventListener("click", () => {
//   console.log("Say Hello");
// });

// document.querySelector("input").addEventListener("blur", () => {
//   console.log("blur");
// });

// document.querySelector("input").addEventListener("focus", () => {
//   console.log("focus");
// });

// document.querySelector("input").addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// document.querySelector("input").addEventListener("input", (e) => {
//   console.log(e);
// });

// function doStuff(name, age) {
//   console.log(name, age);
// }

// doStuff("marius", "20");

// const myFucntion = function () {
//   console.log("asdfasdfd");
// };

// myFucntion();

// const arrowFucntion = (name) => console.log(name, age);

// arrowFucntion("Marius");

// setInterval(() => {
//   console.log("hello");
// }, 1000);

// setTimeout(() => {
//   console.log("praejo laikas");
// }, 1000);

// console.log(document.location);

// document.location.assign("https://www.google.lt");
// document.location.replace("https://www.google.lt/");
// document.location.assign("second.html");
// document.location.reload();
// document.querySelector("button").addEventListener("click", () => {
//   document.location.reload();
// });

// console.log(document.body);
// console.log(document.forms);
