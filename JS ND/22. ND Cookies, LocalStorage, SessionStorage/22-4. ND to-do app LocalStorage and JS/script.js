//? Create a simple to-do list application using JavaScript and local storage.
//? The application should have the following features:

//! A form for adding new to-do items to the list.
//! A display area for showing all the items on the list.
//! A button for clearing the entire list.
//! Use local storage to save the to-do list
//! so that it persists even when the user closes the browser or refreshes the page.
//!     Instructions:

//todo Create an HTML file with a form for adding new to-do items.
//todo The form should have a text input and a button for submitting the item.
//todo Create a JavaScript file to handle the logic for the to-do list application.
//todo Use the localStorage object to save the to-do list to the user's browser.
//todo When the page loads, check if there is a saved to-do list in local storage and display it if there is.
//todo When the user submits a new item, add it to the list and update the local storage.
//todo Add a button that allows the user to clear the entire list and clears the local storage.

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title");
  const toDo = document.querySelector("#todo");
  let arr = { title: title.value, toDo: toDo.value };
  if (!localStorage.getItem("todolist")) {
    const toDoArray = [arr];
    localStorage.setItem("todolist", JSON.stringify(toDoArray));
  } else {
    const entry = JSON.parse(localStorage.getItem("todolist"));
    entry.push(arr);
    localStorage.setItem("todolist", JSON.stringify(entry));
  }
  generateTableEntry(arr);
  title.value = "";
  toDo.value = "";
});

document.querySelector("#clear-btn").addEventListener("click", () => {
  localStorage.removeItem("todolist");
  document.querySelector("#todo-table").innerHTML = `
    <tr>
      <th>Title</th>
      <th>To-Do</th>
    </tr>
  `;
});

function generateTableEntry(item) {
  const table = document.querySelector("#todo-table");
  const row = document.createElement("tr");
  const title = document.createElement("td");
  const toDo = document.createElement("td");

  title.textContent = item.title;
  toDo.textContent = item.toDo;
  row.append(title);
  row.append(toDo);
  table.append(row);
}

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("todolist")) {
    const savedList = JSON.parse(localStorage.getItem("todolist"));
    savedList.forEach((item) => {
      generateTableEntry(item);
    });
  }
});
