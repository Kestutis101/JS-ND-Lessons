// for (let i = 0; i < 21; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// const num = 5;
// let res = 1;
// for (let i = 1; i < num; i++) {
//     res = res + i * res;
// }

//     console.log(res);
// let i = 0;

// while (i < 20) {
//     if (i % 2 === 0)
//     {
//     console.log(i)
// };
//     i++;
// }

// let i = 0;

// do {
//     {
//     console.log(i);
//     }
//     i++;
// } while (i < 21);

// const names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// for (i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

// 1.Create variable with String value - your name.
// 2.Write while loop that iterates 5 times, each time prints your name.

// const name = "Vardas";
//  let i = 0;
//  while (i < 5) {
//  console.log(name);
//  i++;
//  }

//  1.  Use do…while loop to print your name only once.

// let i = 0;
// do {
// console.log('Kestutis');
// i--;
// } while (i > 1);

// 1.Create variable with array containing 5 Strings. One of them has to be your name
// 2.Loop over that array using forEach, but print only when value is your name.

const names = ["a", "b", "c", "d", "Kestutis"];
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Kestutis") {
    console.log(names[i]);
  }
}

const strings = [
  "stuff",
  "more stuff",
  "Ainas",
  "even more stuff",
  "yep, stuff",
];
for (let i = 0; i < strings.length; i++) {
  if (strings[i] == "Ainas") {
    console.log(strings[i]);
  }
}
