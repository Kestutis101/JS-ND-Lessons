// let doors = {
//   color: "brown",
//   isOpen: false,
//   open: function () {
//     if (this.isOpen === true) {
//       return "Doors are open";
//     } else {
//       this.isOpen = true;
//       return "I am opening the door";
//     }
//   },
//   close: function () {
//     if (this.isOpen === false) {
//       return "Doors are closed";
//     } else {
//       this.isOpen = false;
//       return "I am closing the door";
//     }
//   },
// };

// console.log(doors.open());
// console.log(doors.close());

// const savingsAccount = {
//   balance: 1000,
//   interestRate: 1,
//   name: "Tadas",
//   deposite: function () {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   },
//   withdraw: function (amount) {
//     const verifyBalance = this.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       this.balance -= amount;
//       return `Your withdraw $${amount} \nYou have ${this.balance} in your account left`;
//     }
//     if (verifyBalance < 0) {
//       return `Ups you don't have $${amount} in your account left`;
//     }
//   },
//   printAccountSummary: function () {
//     console.log(
//       `Welcome! \nYour balance is currently ${this.balance} and your interest rate is ${this.interestRate}%`
//     );
//   },
// };
// console.log(savingsAccount.withdraw(100));
// savingsAccount.withdraw(100);
// savingsAccount.printAccountSummary();

// const facebookProfile = {
//   name: "Marius",
//   friendsAmount: 100,
//   messages: ["hello", "bye", "world"],
//   postMessage: function (message) {
//     if (message && typeof message === "string") {
//       this.messages.push(message);
//     }
//   },
//   deleteMessage: function (index) {
//     if (!(index > this.messages.length - 1)) {
//       this.messages[index] = undefined;
//       this.messages = this.messages.filter((message) => message);
//     }
//   },
//   addFriend: function () {
//     this.friendsAmount++;
//   },
//   removeFriend: function () {
//     this.friendsAmount--;
//   },
// };

// console.log(Object.assign(facebookProfile, savingsAccount)); // - jeigu bus toks pats "key" tada ji permus prijungus
// console.log(facebookProfile);

// console.log(Object.keys(facebookProfile));
// console.log(Object.values(facebookProfile));
// console.log(Object.entries(facebookProfile));

// console.log(facebookProfile.messages)
// facebookProfile.postMessage(78);
// facebookProfile.deleteMessage(0);

// console.log(facebookProfile.messages);
// facebookProfile.addFriend();
// console.log(facebookProfile.friendsAmount);
// facebookProfile.removeFriend();
// console.log(facebookProfile.friendsAmount);

// const cars = [
//   { type: "BMW", price: "30.000" },
//   { type: "MERCEDES", price: "35.000" },
//   { type: "HONDA", price: "18.000" },
//   { type: "VOLVO", price: "25.000" },
// ];

// cars.forEach((car) => {
//   console.log(`${car.type} car price $${car.price}`);
// });

const obj = {
  name: "Marius",
  age: 26,
  lastName: "Kukolas",
};

const arr = [{ test: "Labas" }, { test2: "Labas labas" }];
// const { name, age } = obj;
// const name = obj.name;
// const age = obj.age;
// console.log(name);
// console.log(age);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [a, , b] = arr;

// console.log(a);
// console.log(b);

// console.log(...arr);

Object.assign(obj, ...arr);
console.log(obj);

function printEverything(target, ...strings) {
  console.log(strings);
  console.log(target);
}

printEverything("labas", "keksas", "kas taip");
