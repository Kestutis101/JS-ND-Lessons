Task: 1;

document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(e) {
  e.preventDefault();
  const result = document.querySelector("input[type=text]").value;
  alert(result);
}

Task: 2;
document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(e) {
  e.preventDefault();
  const result = document.querySelector("input[type=number]").value;
  document.querySelector("h1").textContent = result;
}

Task: 3;
document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(e) {
  e.preventDefault();
  const names = document.querySelector("#names").value;
  const age = document.querySelector("#age").value;
  if (age > 18) {
    document.querySelector("h1").textContent = `Jus galite vairuoti ${names}`;
  } else {
    document.querySelector("h1").textContent = `Jus negalite vairuoti ${names}`;
  }
}
