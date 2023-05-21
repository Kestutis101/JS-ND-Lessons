const isItWinter = false;
const isItSummer = false;

// if (isItWinter) {
//     console.log('it is winter and it is cold');
// } else{
//     console.log("I don't know if it is cold");
// }

if (isItWinter) {
    console.log('it is winter and it is cold');
} else if (isItSummer)
    {
    console.log("It might be hot outside");
} else {
    console.log("I don't know if it is cold");
}

const isItEvening = false;

///ternary function
// isItEvening ? console.log("Evening") : console.log("not evening");

// let isUserAdult = confirm("Are you an Adult?");

// isUserAdult ? alert("You can work X Rated movies") : alert("It is time to sleep");

//Switch statement

const weekDay = 3;

switch (weekDay) {
    case 1:
        console.log("Pirmadienis");
        break;
    case 2:
        console.log("Antradienis");
    break;
    case 3:
    console.log("Treciadienis");
    break;
    default:
        console.log("Nesuprantama diena")
}