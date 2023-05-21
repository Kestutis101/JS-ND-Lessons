export function sayHello() {
  console.log("Hello World");
}

export function sayGoodBye() {
  console.log("Good Bye");
}

export default function fetchData() {
  console.log("Fetching data");
  console.log(generateHtml());
}

function generateHtml() {
  return "something";
}
