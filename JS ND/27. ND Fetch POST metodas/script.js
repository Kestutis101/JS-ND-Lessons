const BASE_URL = "https://olive-bead-glazer.glitch.me";
const main = document.querySelector("main");

const cars = await getCars();

cars.forEach((car) => {
  createTable(car);
});

async function getCars() {
  const res = await fetch(BASE_URL);
  const data = await res.json();

  return data;
}

function createTable(car) {
  const container = document.createElement("div");
  const brand = document.createElement("p");
  brand.textContent = car.brand;
  const model = document.createElement("p");
  model.textContent = car.model;

  container.append(brand, model);
  main.append(container);
}
