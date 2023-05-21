//! Task: 1

const url = "https://magnetic-melon-yam.glitch.me";

const body = document.querySelector("body");

// function makeTable(persons) {
//   persons.forEach((person) => {
//     const tr = document.createElement("tr");

//     const thId = document.createElement("th");
//     thId.textContent = person.id;

//     const thName = document.createElement("th");
//     thName.textContent = person.name;

//     const thCity = document.createElement("th");
//     thCity.textContent = person.city;

//     const thFavColor = document.createElement("th");
//     thFavColor.textContent = person.fav_color;
//     tr.append(thId, thName, thCity, thFavColor);
//     body.append(tr);
//   });
// }

// const GetSomeInfo = async () => {
//   try {
//     const response = await fetch("https://magnetic-melon-yam.glitch.me");
//     if (response) {
//       const persons = await response.json();
//       makeTable(persons);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// GetSomeInfo();

//! Task: 2

// const GetSomeInfo = async () => {
//   try {
//     const response = await fetch("https://magnetic-melon-yam.glitch.me");
//     if (response) {
//       const persons = await response.json();
//       makeTable(persons);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// function makeTable(persons) {
//   persons.forEach((person) => {
//     const tr = document.createElement("tr");

//     const thId = document.createElement("td");
//     thId.textContent = person.id;
//     console.log(person.name);

//     const thName = document.createElement("td");
//     thName.textContent = person.name.split(" ")[0];

//     const thSurName = document.createElement("td");
//     thSurName.textContent = person.name.split(" ")[1];

//     const thCity = document.createElement("td");
//     thCity.textContent = person.city;

//     const thFavColor = document.createElement("td");
//     thFavColor.textContent = person.fav_color;
//     tr.append(thId, thName, thSurName, thCity, thFavColor);
//     body.append(tr);
//   });
// }

// GetSomeInfo();

//! Task: 3

// const asd = [
//   {
//     id: 1,
//     image: "https://robohash.org/etmagniea.png?size=50x50&set=set1",
//     vip: true,
//     fav_color: "Orange",
//     city: "Turenki",
//     name: "Arabella Iianon",
//   },
// ];

// const GetSomeInfo = async () => {
//   try {
//     const response = await fetch("https://magnetic-melon-yam.glitch.me");
//     if (response) {
//       const persons = await response.json();
//       makeTable(persons);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// function makeTable(persons) {
//   persons.forEach((person) => {
//     const tr = document.createElement("tr");

//     const img = document.createElement("img");
//     img.src = person.image;

//     const thId = document.createElement("td");
//     thId.textContent = person.id;
//     console.log(person.name);

//     const thName = document.createElement("td");
//     thName.textContent = person.name.split(" ")[0];

//     const thSurName = document.createElement("td");
//     thSurName.textContent = person.name.split(" ")[1];

//     const thCity = document.createElement("td");
//     thCity.textContent = person.city;

//     const thFavColor = document.createElement("td");
//     thFavColor.textContent = person.fav_color;
//     tr.append(thId, img, thName, thSurName, thCity, thFavColor);
//     body.append(tr);
//   });
// }

// GetSomeInfo();

//! Task: 4 //! Task: 5

const state = {};

const createCheckbox = () => {
  const checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "isVipCheckbox");
  document.body.append(checkbox);

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", "isVipCheckbox");
  checkboxLabel.innerText = "VIP";
  document.body.append(checkboxLabel);
};

const createSearchForm = () => {
  const searchBox = document.createElement("input");
  searchBox.setAttribute("type", "search");
  searchBox.setAttribute("id", "search");
  searchBox.setAttribute("name", "search");
  document.body.appendChild(searchBox);

  const searchButton = document.createElement("button");
  searchButton.innerHTML = "Search for name";
  searchButton.setAttribute("id", "searchButton");

  const form = document.createElement("form");
  form.append(searchBox, searchButton);
  document.body.append(form);
};

const createTableSkeleton = () => {
  const id = document.createElement("th");
  id.innerText = "ID";

  const image = document.createElement("th");
  image.innerText = "Image";

  const firstName = document.createElement("th");
  firstName.innerText = "First name";

  const lastName = document.createElement("th");
  lastName.innerText = "Last name";

  const city = document.createElement("th");
  city.innerText = "City ";

  const favColor = document.createElement("th");
  favColor.innerText = "Fav color";

  const tr = document.createElement("tr");
  tr.append(id, image, firstName, lastName, city, favColor);

  const thead = document.createElement("thead");
  thead.append(tr);

  const table = document.createElement("table");
  table.append(thead, document.createElement("tbody"));
  document.body.append(table);
};

function populateTable(robots) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  robots.forEach((robot) => {
    const id = document.createElement("td");
    id.innerText = robot.id;

    const img = document.createElement("img");
    img.src = robot.image;
    img.setAttribute("alt", "UserPicture");
    const image = document.createElement("td");
    image.append(img);

    const [name, surname] = robot.name.split(" ");

    const firstName = document.createElement("td");
    firstName.innerText = name;

    const lastName = document.createElement("td");
    lastName.innerText = surname;

    const city = document.createElement("td");
    city.innerText = robot.city;

    const favColor = document.createElement("td");
    favColor.innerText = robot.fav_color;

    const tr = document.createElement("tr");
    tr.append(id, image, firstName, lastName, city, favColor);
    tbody.append(tr);
  });
}

createCheckbox();
createSearchForm();
createTableSkeleton();

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const searchString = document.getElementById("search").value.toLowerCase();
  populateTable(
    state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchString)
    )
  );
});

document.getElementById("isVipCheckbox").addEventListener("change", (event) => {
  populateTable(
    event.target.checked
      ? state.robots.filter((robot) => robot.vip)
      : state.robots
  );
});

async function fetchData() {
  try {
    let response = await fetch("https://magnetic-melon-yam.glitch.me");
    if (response.ok) {
      state.robots = await response.json();
      populateTable(state.robots);
      console.log(state.robots);
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
