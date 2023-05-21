//!  Task: 1

// const names = "Kestutis";
// const h2 = document.createElement("h2");
// h2.textContent = names;
// document.body.append(h2);

//! Task: 2

// document.getElementById("names").textContent = "Kestutis";

//! Task: 3

// document.querySelector("ul li:last-child").textContent = "Sūris";

//! Task: 4 - Kompleksiniai DOM Selektoriai

// document.querySelector(".bluetext span").textContent = "blue";

//! Task: 5

const firstLine = document.querySelector("ol li:first-child");
const secondLine = document.querySelector("ol li:nth-child(2)");

const BMW_GROUP = firstLine.textContent;
const VW_GROUP = secondLine.textContent;
firstLine.textContent = VW_GROUP;
secondLine.textContent = BMW_GROUP;
