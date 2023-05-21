//? dar viena užduotis.
//? atvaizduoti visas prekes duotas masyve ir sukurti
//? input fieldus su kuriais bus galima pridėti naujų prekių.

//! kaip bonusą galit prie kiek vienos prekės dar pridėti ir nuotrauką.
//! Tai reiškia dar vienas input fieldas kur įrašytumėt nuotraukos linką
//! ir prie duoto masyvo kiekvienam objekte pridėti dar vieną property kuriame bus img linkas

const items = [
  {
    name: "Item 1",
    price: 10,
    img: "https://images.unsplash.com/photo-1672393244054-f9558b19073f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80",
  },
  {
    name: "Item 2",
    price: 20,
    img: "https://images.unsplash.com/photo-1672392758425-8fbcecd35694?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  },
  {
    name: "Item 3",
    price: 30,
    img: "https://images.unsplash.com/photo-1672405044651-3afd941c283e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1423&q=80",
  },
  {
    name: "Item 4",
    price: 40,
    img: "https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Item 5",
    price: 50,
    img: "https://plus.unsplash.com/premium_photo-1668374530742-8788f4112aba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const table = document.querySelector("table");
const nameInput = document.querySelector("#name-input");
const priceInput = document.querySelector("#price-input");
const imgInput = document.querySelector("#img-input");

document
  .querySelector("#generate-button")
  .addEventListener("click", generateTable);
document.querySelector("#add-button").addEventListener("click", addItem);

function generateTable() {
  for (let i = 0; i < items.length; i++) {
    const tr = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = items[i].name;
    const price = document.createElement("td");
    price.textContent = items[i].price;
    const image = document.createElement("img");
    const imageTD = document.createElement("td");
    image.setAttribute("src", items[i].img);
    imageTD.append(image);
    tr.append(name, price, imageTD);
    table.append(tr);
  }
}

function addItem() {
  const name = nameInput.value;
  const price = priceInput.value;
  const img = imgInput.value;

  const item = {
    name,
    price,
    img,
  };

  const tr = document.createElement("tr");

  const nameTD = document.createElement("td");
  nameTD.textContent = item.name;
  const priceTD = document.createElement("td");
  priceTD.textContent = item.price;
  const image = document.createElement("img");
  const imageTD = document.createElement("td");
  image.setAttribute("src", item.img);
  imageTD.append(image);
  tr.append(nameTD, priceTD, image);
  table.append(tr);
}
