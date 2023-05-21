// Task 1

{
  const items = [
    {
      name: "Item 1",
      price: 10,
      imgUrl:
        "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    },
    {
      name: "Item 2",
      price: 20,
      imgUrl:
        "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    },
    {
      name: "Item 3",
      price: 30,
      imgUrl:
        "https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Item 4",
      price: 40,
      imgUrl:
        "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      name: "Item 5",
      price: 50,
      imgUrl:
        "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
    },
  ];

  const table = document.querySelector("table");
  const nameInput = document.querySelector("input#itemName");
  const priceInput = document.querySelector("input#itemPrice");
  const imgInput = document.querySelector("input#itemImg");
  const addButton = document.querySelector("button#add");

  displayInitial();

  addButton.addEventListener("click", executeAdd);

  function displayInitial() {
    for (let i = 0; i < items.length; i++) {
      createTableRow(items[i]);
    }
  }

  function executeAdd(e) {
    e.preventDefault();
    const name = nameInput.value;
    const price = priceInput.value;
    const imgUrl = imgInput.value;

    const item = {
      name,
      price,
      imgUrl,
    };

    createTableRow(item);
    clear();
  }

  function clear() {
    nameInput.value = "";
    priceInput.value = "";
    imgInput.value = "";
  }

  function createTableRow(items) {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = items.name;
    const tdPrice = document.createElement("td");
    tdPrice.textContent = items.price;
    const tdImg = document.createElement("td");
    const image = document.createElement("img");
    image.setAttribute("src", items.imgUrl);
    tdImg.append(image);
    tr.append(tdName, tdPrice, tdImg);
    table.append(tr);
  }
}
