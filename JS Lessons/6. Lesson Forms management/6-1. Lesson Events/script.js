// document.body.addEventListener("click", () => alert("labas"));

//Events general temple
function start() {
  for (let i = 0; i < document.body.children.length; i++) {
    console.log(document.body.children[i].tagName);
  }
}

const startArrow = () => {
  for (let i = 0; i < document.body.children.length; i++) {
    console.log(document.body.children[i].tagName);
  }
};

const printMousePosition = (event) => {
  console.log(event);
  console.log(event.clientX, event.clientY);
  console.dir(event.target);
};

const heading = document.querySelector("h1");
heading.addEventListener("click", printMousePosition);

//Most common events
//Mouse events

//click
const container = document.querySelector("div");
container.addEventListener("click", () => console.log("div clicked"));

//dblclick
container.addEventListener("dblclick", () => console.log("dblclick clicked"));

//mouseover
// container.addEventcListener("mouseover", () =>
//   console.log("div has mouseover")
// );

//mouseout
container.addEventListener("mouseout", () =>
  console.log("div has no mouseover")
);

//keyboard events

//keypress
document.addEventListener("keypress", (e) => console.log(e.key));

//keydown
document.addEventListener("keyup", (e) => console.log(e));
