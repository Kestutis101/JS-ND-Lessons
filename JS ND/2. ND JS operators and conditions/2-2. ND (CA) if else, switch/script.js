let number = prompt("Prasome ivesti skaiciu:");

if (number % 2 == 0) {
  console.log("Skaicius lyginis.");
} else {
  console.log("Skaicius nelyginis.");
}

let group = prompt("prasome ivesti muzikantu skaiciu:");

if (group == 0) {
  console.log("Tai nera grupe");
} else if (group == 1) {
  console.log("Tai yra Solo");
} else if (group == 2) {
  console.log("Tai yra duetas");
} else if (group == 3) {
  console.log("Tai yra trio");
} else if (group == 4) {
  console.log("Tai yra kvartetas");
} else if (group == 5) {
  console.log("Tai yra grupe");
}

const result =
  number % 2 == 0
    ? console.log("Skaicius lyginis")
    : console.log("Skaicius nelyginis");
let groupSecond = 5;

switch (groupSecond) {
  case 0:
    console.log("Tai nera grupe");
    break;
  case 1:
    console.log("Tai yra Solo");
    break;
  case 2:
    console.log("Tai yra duetas");
    break;
  case 3:
    console.log("Tai yra trio");
    break;
  case 4:
    console.log("Tai yra kvartetas");
    break;
  case 5:
    console.log("Tai yra grupe");
    break;
  default:
    console.log("Nesuprantama ka norite pasakyti");
}
