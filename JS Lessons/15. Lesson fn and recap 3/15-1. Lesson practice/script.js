// const test = document.createElement("p");
// test.textContent = "This is a created element";
// document.querySelector("body").append(test);
// document.querySelector("body").prepend(test);

const data = ["Apple", "Banana", "Orange", "Grape", "Peach", "Mango"];
const ulElement = document.createElement("ul");

for (let i = 0; i < data.length; i++) {
  const liElement = document.createElement("li");
  liElement.textContent = data[i];
  ulElement.append(liElement);
}

document.querySelector("main").append(ulElement);
