//! object literals

// const book1 = {
//   title: "Harry Potter",
//   author: "J.K. Rowling",
//   year: 1997,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} on ${this.year}`;
//   },
// };

// const book2 = {
//   title: "1984",
//   author: "George Orwell",
//   year: 2000,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} on ${this.year}`;
//   },
// };

// console.log(book1);
// console.log(book1.getSummary());
// console.log(book2);
// console.log(book2.getSummary());

// const book3 = new Object();
// book3.title = "1984";

//! constructor function

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getSummary = function () {
//     return `${this.title} was written by ${this.author} on ${this.year}`;
//   };
// }

// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} on ${this.year}`;
// };

// Book.prototype.revise = function (newEditionYear) {
//   this.year = newEditionYear;
//   return this.getSummary();
// };

// const book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
// const book2 = new Book("1984", "George Orwell", 2000);
// console.log(book1);
// console.log(book1.getSummary());
// console.log(book1.revise(2022));

// console.log(book2);
// console.log(book2.getSummary());

//! Prototype inheritance

// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }
// Magazine.prototype = Object.create(Book.prototype);

// const magazine = new Magazine("Naminukas", "Vaiga", 1999, "Frebuary");

// console.log(magazine);

// console.log(magazine.getSummary());

//todo Task: 1

function Person(name, lastname, birthYear) {
  this.name = name;
  this.lastname = lastname;
  this.birthYear = birthYear;
}
Person.prototype.fullname = function () {
  return `Your name ${this.name} last name ${this.lastname}`;
};

Person.prototype.getAge = function () {
  return new Date().getFullYear() - this.birthYear;
};
const john = new Person("John", "Doe", 1982);
console.log(john.fullname());
console.log(john.getAge());
// return `your name ${this.name} and last name ${this.lastname}`;
// return `Your bitrh is ${newBirthYear}`;
