//! Task: 1

const friends = ["Jonas", "Paulius", "Antanas"];

console.log(friends.sort());

//! Task: 2

console.log(friends.sort((a, b) => (a && !b ? 1 : -1)));

//! Task: 3

const array = [5, 10, 20, 11, 12, 1, 0, 14, 25];

console.log(array.sort((a, b) => b - a));

//! Task: 4

const arrayTwo = [10, 5, 20, 4];
const finishedArray = arrayTwo.sort((a, b) => b - a);
console.log(finishedArray[0]);
