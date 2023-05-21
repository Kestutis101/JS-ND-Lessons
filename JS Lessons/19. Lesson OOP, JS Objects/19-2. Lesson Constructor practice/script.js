//? TASK 1
//? Susikurkite konstruktorių car, kuris priims
//? brand, model, engine ir turės metodą 'turnOn' -
//? kuris alertins 'vrooom'.
//? Sukurkite du objektus ir patikrinkite ar veikia.

function Car(brand, model, engine) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.turnOn = function () {
    alert("vrooom");
  };
}

const myCar = new Car("Toyota", "Corolla", "2.0L");
const yourCar = new Car("Ford", "Mustang", "5.0L");
console.log(yourCar);
yourCar.turnOn();

//? TASK 2
//? Pakoreguokite šį konstruktorių ir pridėkite papildomą
//? property 'basePrice' ir metodą 'getPrice'.
//? basePrice propertį įrašys sukuriant objektą, tačiau getPric
//? priklausimai nuo variklio išmes kokia yra galutinė kaina.
//? Jei variklis 'electric' - kaina bus +10,000;
//? jei 'diesel' +5,000;
//? jei 'petrol' - kaina tokia kokia ir basePrice.

function Car(brand, model, engine, price) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.basePrice = price;
  this.getPrice = function () {
    let additionalPrice = 0;
    if (this.engine === "electric") {
      additionalPrice = 10000;
    } else if (this.engine === "diesel") {
      additionalPrice = 5000;
    }
    return this.basePrice + additionalPrice;
  };
  this.turnOn = function () {
    alert("vrooom");
  };
}

const anotherCar = new Car("Toyota", "Corolla", "2.0L", 50000);
console.log(anotherCar.getPrice());
