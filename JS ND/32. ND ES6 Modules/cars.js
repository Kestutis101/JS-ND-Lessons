export function createCar(car) {
  const array = ["BMW", "VW", "AUDI", "MB"];
  car.innerHTML += `<ul>
    ${array.map((car) => `<li>${car}</li>`)}
    </ul>`;
}
