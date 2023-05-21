Task: 1;
const car = prompt("Please enter car brand name:");

switch (car) {
  case "BMW":
  case "Mini":
  case "Rolls-Royce":
    console.log("This car brand belongs to BMW Group");
    break;
  case "VW":
  case "Audi":
  case "Bentley":
  case "Bugatti":
  case "Lamborghini":
  case "Porsche":
    console.log("This car brand belongs to VW Group");
    break;
  default:
    console.log("Unkown car brand");
}

Task: 2;

const userInput = prompt("Prasome ivesti vaisiu arba darzove:");

switch (userInput) {
  case "agrastas":
  case "agurkas":
  case "agurotis":
  case "avietė":
  case "braškė":
    console.log("Tai yra vaisius");
    break;
  case "bulvė":
  case "baltagūžis kopūstas":
  case "briuselio kopūstas":
  case "svogūnas":
  case "špinatai":
    console.log("Tai yra darzove");
    break;
  default:
    console.log("Tai nera vaisius ar darzove");
}

Task: 3;

let weekDay = new Date().getDay();

switch (weekDay) {
  case 0:
    weekDay = "Pirmadienis";
    break;
  case 1:
    weekDay = "Antradienis";
    break;
  case 2:
    weekDay = "Treciadienis";
    break;
  case 3:
    weekDay = "Ketvirtadienis";
    break;
  case 4:
    weekDay = "Penktadienis";
    break;
  case 5:
    weekDay = "Sestadienis";
    break;
  case 6:
    weekDay = "Sekmadienis";
    break;

  default:
    console.log("Tokios savaites dienos nera");
}
console.log(weekDay);
