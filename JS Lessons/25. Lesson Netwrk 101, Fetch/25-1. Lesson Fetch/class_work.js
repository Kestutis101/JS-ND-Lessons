//! Fetch get examples

//? 1. get github users

// const url = "https://api.github.com/users";
const body = document.querySelector("body");

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     const list = document.createElement("ul");
//     data.forEach((user) => {
//       const userListItem = document.createElement("li");
//       userListItem.textContent = user.login;
//       list.append(userListItem);
//       body.append(list);
//     });
//   })
//   .catch((error) => {
//     const errorMessage = document.createElement("h1");
//     errorMessage.textContent = "Error Catched: " + error;
//     body.append(errorMessage);
//     console.log(error);
//   })
//   .finally(() => console.log("fetch finished"));

//? 2. get bunch picsum photos
//? get specific page with GET parameter

const urlPicsum = "https://picsum.photos/v2/list";

const getBunchPhotos = async (pageNumber) => {
  try {
    const response = await fetch(urlPicsum + "?page=" + pageNumber);
    const data = await response.json();
    data.forEach((imageData) => {
      const image = document.createElement("img");
      body.style.display = "flex";
      body.style.flexWrap = "wrap";
      image.setAttribute("src", imageData.download_url);
      image.setAttribute("width", "200px");
      body.append(image);
      console.log(response);
    });
  } catch (e) {
    console.log(e);
  }
};
getBunchPhotos(3);
// document.querySelector("button").addEventListener("click", getBunchPhotos);
