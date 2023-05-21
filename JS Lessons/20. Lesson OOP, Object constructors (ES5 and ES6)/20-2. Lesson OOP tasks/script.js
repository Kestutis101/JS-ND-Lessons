//todo Task: 1

// class Movie {
//   constructor(name, year, director, budget, income) {
//     this.name = name;
//     this.year = year;
//     this.director = director;
//     this.budget = +budget;
//     this.income = +income;
//   }
//   getIntroduction() {
//     return `The ${this.name} is a made at ${this.year} year. This movie was made of ${this.director}`;
//   }
//   getProfit() {
//     return `This movie made ${this.income - this.budget} revenue`;
//   }
// }

// const movie1 = new Movie(
//   "Dictator",
//   2012,
//   "Larry Charles",
//   65000000,
//   179379533
// );
// const movie2 = new Movie(
//   "The Godfather",
//   1972,
//   "Francis Ford Coppola",
//   6000000,
//   136381073
// );

// console.log(movie1);
// console.log(movie1.getIntroduction());
// console.log(movie1.getProfit());
// console.log(movie2);
// console.log(movie2.getIntroduction());
// console.log(movie2.getProfit());

//todo Task: 2

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.name = name;
//     this.created = Date.now();
//   }
// }
// let rabbit = new Rabbit("White Rabbit");

// console.log(rabbit);

//todo Task: 3

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getIntroduction() {
    return ` This ${this.make} is a ${this.model}`;
  }
  getAge() {
    return new Date().getFullYear() - this.year <= 10
      ? `10 metu arba naujesnis`
      : `11 metu arba senesnis`;
  }
}

class Motocycle extends Car {
  constructor(make, model, year, wheels) {
    super(make, model, year);
    this.wheels = wheels;
  }
  getWheelsNumber() {
    if (this.wheels === 3) {
      return `motociklas turi ${this.wheels}`;
    }
    if (this.wheels === 2) {
      return `motociklas turi ${this.wheels}`;
    } else {
      return `joks motociklas ${this.wheels} neturi`;
    }
  }
}

const car = new Car("BMW", "5 Series", 2010);
const motocycle = new Motocycle("Harley Davidson", "SPORTSTER™ S", 2022, 5);
console.log(car);
console.log(car.getIntroduction());
console.log(car.getAge());
console.log(motocycle);
console.log(motocycle.getIntroduction());
console.log(motocycle.getAge());
console.log(motocycle.getWheelsNumber());
