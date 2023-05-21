const heading = document.createElement("h1");
heading.textContent = "Kestutis";
heading.style.color = "red";
document.body.append(heading);

const bodytag = document.querySelector("body");
const ultag = document.createElement("ul");
const li1tag = document.createElement("li");
const li2tag = document.createElement("li");
const li3tag = document.createElement("li");

const BMW = document.querySelector("li");
li1tag.textContent = "BMW";
const VW = document.querySelector("li");
li2tag.textContent = "VW";
const FIAT = document.querySelector("li");
li3tag.textContent = "FIAT";

bodytag.append(ultag, li1tag, li2tag, li3tag);
