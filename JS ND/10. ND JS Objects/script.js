// const car = {
//   doors: 5,
//   color: "red",
//   brand: "BMW",
// };
// console.log(car.doors);

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const person = {
//     name: e.target[0].value,
//     surname: e.target[1].value,
//   };
//   console.log(person);
// });

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const names = e.target.elements.name.value;
  const age = Number(e.target.elements.age.value);

  const isLegalAge = age >= 18;

  const person = {
    name: names,
    isLegal: isLegalAge,
  };
  console.log(person);
});
