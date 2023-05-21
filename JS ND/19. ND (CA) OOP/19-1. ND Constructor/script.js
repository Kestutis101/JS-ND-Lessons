//todo Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'.
//todo Sukurkite du objektus ir patikrinkite ar veikia.

// function Car(b, m, e) {
//   this.brand = b;
//   this.model = m;
//   this.engine = e;
//   this.turnOn = function () {
//     alert("vrooom");
//   };
// }

// const obj1 = new Car("BMW", "5 Series", "2.0");
// const obj2 = new Car("BMW", "3 Series", "3.0");
// console.log(obj2.turnOn());

//todo Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'.
//todo basePrice propertį įrašys sukuriant objektą, tačiau getPrice priklausomai nuo variklio išmes kokia yra galutinė kaina.
//todo Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

function Car(brand, model, engine, price) {
  this.brand = brand;
  this.model = model;
  this.engine = engine;
  this.basePrice = price;
  this.turnOn = function () {
    alert("vrooom");
  };
  this.getPrice = function (basePrice = 22500) {
    let additionalPrice = 0;
    if (this.engine === "electric") {
      additionalPrice = 10000;
    } else if (this.engine === "diesel") {
      additionalPrice = 5000;
    }
    return this.basePrice + additionalPrice;
  };
}

const obj1 = new Car("BMW", "5 Series", "Electric", 40000);
const obj2 = new Car("BMW", "3 Series", "Diesel", 40000);
