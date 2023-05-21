// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = document.querySelector("#name").value;
//   const number = Number(document.querySelector("#number").value);
//   if (Number.isInteger(number)) {
//     const h1 = document.createElement("h1");
//     h1.textContent = name.repeat(number);
//     document.body.append(h1);
//   } else {
//     alert("Iveskite sveikaji skaiciu");
//   }
// });

// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = document.querySelector("#name").value.trim();
//   alert("vardo ilgis: " + name.length);
// });

// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const fullname = document.querySelector("#fullname").value.split(" ");
//   console.log(fullname);
//   const name = fullname[0];
//   const surname = fullname[1];
//   const h1Name = document.createElement("h1");
//   const h1Surname = document.createElement("h1");
//   document.body.append(h1Name, h1Surname);
//   h1Name.textContent = name;
//   h1Surname.textContent = surname;
// });

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const fullname = document.querySelector("#fullname").value.split(" ");

  const name = fullname[0];
  const surname = fullname[1];
  const h1Name = document.createElement("h1");
  const h1Surname = document.createElement("h1");
  name.textContent = name.split(" ")[0];
  name.textContent = surname.slice(name, "")[1];

  document.body.append(h1Name, h1Surname);
  h1Name.textContent = name;
  h1Surname.textContent = surname;
});
