//* Task : 1.Create a function wasteTime(), which would have a loop and would make 10000000 iterations.
//* In every iteration it would just make dummy operation, e.g. 5 * 95 / 12;
//* Function should return how long it took to run iterations.
//* Tip.: Set timestamp (Date.now()) before running function and subtract it at the end of the function from new timestamp.
//* Write function as declaration and as arrow function.

// function wasteTime() {
//   let number = 10000000000;
//   let i = 0;
//   const timestamp = +new Date().getTime();
//   console.log(timestamp);
//   while (i < number) {
//     (5 * 95) / 12;
//     i++;
//   }
//   const timestampAfter = +new Date().getTime();
//   console.log(timestampAfter);
//   const resultTimestamp = timestampAfter - timestamp;
//   console.log(
//     ` This loop used time in ms: ${resultTimestamp} to calculate 100000000 times`
//   );
// }

// wasteTime();

const wasteTimeArrow = () => {
  let number = 1000000000;
  let i = 0;
  const timestamp = +new Date().getTime() / 1000;
  while (i < number) {
    (5 * 95) / 12;
    i++;
  }
  const timestampAfter = +new Date().getTime() / 1000;
  const resultTimestamp = timestampAfter - timestamp;
  console.log(
    `This loop was calculated in: ${resultTimestamp.toFixed(
      2
    )} (seconds) 100000000 times`
  );
};

wasteTimeArrow();

//* Task: 2 Write function calculator, which would take 3 parameters: number, operator, number,
//* and would return result of number operator number, e.g. 3, ‘-’,1, should return 2.
//* Set that default operator is ‘+’ if undefined is supplied as operator. Write function as declaration and as arrow function.

function calculator(number, operator = "+", number2) {
  return 3 - 1;
}

console.log(calculator());

//* Task: 3 Write IIFE with function declaration and as arrow function,
//* which would print to console immediately after loading JS string with greeting:
//* ‘Hello, today is <Monday>’, where day name would be created depending on today’s weekday name
//* (https://www.w3schools.com/jsref/jsref_obj_date.asp). Function invocation is not allowed.

(function checkWeekDay() {
  const weekDay = new Date().toLocaleString("default", { weekday: "long" });
  console.log(`Hello, today is ${weekDay}`);
})();

(() => {
  const weekDay = new Date().toLocaleString("default", { weekday: "long" });
  console.log(`Hello, today is ${weekDay}`);
})();
