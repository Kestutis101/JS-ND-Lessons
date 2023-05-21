//? Create a shopping cart application using JavaScript and session storage.
//? The application should have the following features:

//! A list of products that can be added to the cart.
//! Each product should have a name, description, price, and image.
//! A display area for showing the items in the cart,
//! including the name, description, price, and image of each item.
//! A button for removing an item from the cart.
//! Use session storage to save the cart items so that they persist only during the current browser session.
//! Instructions:

//todo Create an HTML file with a list of products that can be added to the cart.
//todo Each product should have a button that allows the user to add it to the cart.
//todo Create a JavaScript file to handle the logic for the shopping cart application.
//todo Use the sessionStorage object to save the cart items to the user's browser.
//todo When the page loads, check if there is a saved cart in session storage and display it if there is.
//todo When the user adds a product to the cart, update the cart and session storage.
//todo Add a button for each item in the cart that allows the user to remove it
//todo from the cart and update the session storage.

const products = [
  {
    name: "Product 1",
    description: "Description of Product 1",
    price: 10,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Product 2",
    description: "Description of Product 2",
    price: 20,
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Product 3",
    description: "Description of Product 3",
    price: 30,
    image: "https://via.placeholder.com/100",
  },
];

const productsContainer = document.getElementById("products");

products.forEach((product, index) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");

  const imageElement = document.createElement("img");
  imageElement.src = product.image;

  const nameElement = document.createElement("h3");
  nameElement.textContent = product.name;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = product.description;

  const priceElement = document.createElement("p");
  priceElement.textContent = `Price: $${product.price}`;

  const addButton = document.createElement("button");
  addButton.textContent = "Add to Cart";
  addButton.addEventListener("click", () => {
    addToCart(product);
  });

  productElement.append(imageElement);
  productElement.append(nameElement);
  productElement.append(descriptionElement);
  productElement.append(priceElement);
  productElement.append(addButton);

  productsContainer.append(productElement);
});

const cartItemsContainer = document.getElementById("cart-items");

function addToCart(product) {
  let cartItems = sessionStorage.getItem("cartItems");
  if (!cartItems) {
    cartItems = [];
  } else {
    cartItems = JSON.parse(cartItems);
  }

  cartItems.push(product);
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));

  displayCartItems();
}

function removeCartItem(index) {
  let cartItems = sessionStorage.getItem("cartItems");
  if (!cartItems) {
    return;
  }

  cartItems = JSON.parse(cartItems);
  cartItems.splice(index, 1);
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));

  displayCartItems();
}

function displayCartItems() {
  cartItemsContainer.innerHTML = "";

  let cartItems = sessionStorage.getItem("cartItems");
  if (!cartItems) {
    return;
  }

  cartItems = JSON.parse(cartItems);

  cartItems.forEach((item, index) => {
    const cartItemElement = document.createElement("li");
    cartItemElement.classList.add("cart-item");

    const imageElement = document.createElement("img");
    imageElement.src = item.image;

    const nameElement = document.createElement("h3");
    nameElement.textContent = item.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = item.description;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: $${item.price}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeCartItem(index);
    });

    cartItemElement.append(imageElement);
    cartItemElement.append(nameElement);
    cartItemElement.append(descriptionElement);
    cartItemElement.append(priceElement);
    cartItemElement.append(removeButton);

    cartItemsContainer.append(cartItemElement);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  displayCartItems();
});
