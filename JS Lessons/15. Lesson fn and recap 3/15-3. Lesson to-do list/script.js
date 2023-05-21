const todoInput = document.querySelector("input");
const TodoList = document.querySelector("ul");
const deleteAllButton = document.querySelector("button");
const mainElement = document.querySelector("main");

todoInput.addEventListener("keypress", addNewTodo);

deleteAllButton.addEventListener("click", () => {
  const allIlElements = document.querySelectorAll("li");

  for (let i = 0; i < allIlElements.length; i++) {
    allIlElements[i].remove();
  }

  toggleButtonVisibility();
});

function addNewTodo(e) {
  removeWarningParagraph();
  if (e.key === "Enter") {
    const inputvalue = e.target.value;

    if (!inputvalue) {
      if (!document.querySelector("p")) {
        const warningParagraph = document.createElement("p");
        warningParagraph.textContent = "Input is empty";
        mainElement.appendChild(warningParagraph);
      }
      return;
    }

    const li = document.createElement("li");
    li.textContent = `${inputvalue}  `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", () => {
      li.remove();
      const liElements = document.querySelectorAll("li");

      if (!liElements.length) {
        toggleButtonVisibility();
      }
    });

    li.append(deleteButton);

    TodoList.append(li);
    e.target.value = "";

    if (deleteAllButton.classList.contains("invisible")) {
      toggleButtonVisibility();
    }
  }
}

function removeWarningParagraph() {
  const par = document.querySelector("p");
  if (par) {
    par.remove();
  }
}

function toggleButtonVisibility() {
  deleteAllButton.classList.toggle("invisible");
}
