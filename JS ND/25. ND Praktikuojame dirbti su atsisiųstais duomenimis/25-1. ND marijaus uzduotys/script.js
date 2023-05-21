//todo 1:
/*
Create new function, which would return details about one specific image,
e.g. id = 5;
https://picsum.photos/id/{id}/info
if should be given to function as parameter;
Some data about image should be added to HTML with JS.
*/

//todo 2:
/*
Get Chuck Norris joke from https://api.chucknorris.io/jokes/random
and print the joke itself out in html.
Do it using async/await, and also with .then notation;
*/

//! Task: 1

// const urlPicsum = "https://picsum.photos/id/";
const body = document.querySelector("body");
// const getBunchPhotos = async (id) => {
//   try {
//     const response = await fetch(urlPicsum + id + "/info");
//     const data = await response.json();
//     const image = document.createElement("img");
//     body.style.display = "flex";
//     body.style.flexWrap = "wrap";
//     image.setAttribute("src", data.download_url);
//     image.setAttribute("width", "200px");
//     body.append(image);
//   } catch (e) {
//     console.log(e);
//   }
// };
// getBunchPhotos(50);

//! Task: 2

const urlChuck = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
  const response = await fetch(urlChuck);
  const data = await response.json();
  const h1 = document.createElement("h1");
  h1.textContent = data.value;
  body.append(h1);
}

getJoke();
