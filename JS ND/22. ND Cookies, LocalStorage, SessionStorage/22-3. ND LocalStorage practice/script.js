//todo Sukurkite puslapį, kuriame būtų forma su vienu input - fullName. Įvedus vardą ir pavardę,
//todo juos padalina į dvi dalis (name ir surname).
//todo Vardą ir pavardę įdeda į objektą, o objektą - į array.
//todo Šį array išsaugo localStorage. Po forma sukurkite lentelę joje atvaizduokite informaciją iš localStorage.

const LOCAL_STORAGE_ITEM_KEY = "users";

const renderUsersTable = () => {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_KEY));
  const tbody = document.querySelector("tbody");
  tbody.textContent = "";
  users &&
    users.forEach((user) => {
      const name = document.createElement("td");
      name.textContent = user.name;

      const surname = document.createElement("td");
      surname.textContent = user.surname;

      const tr = document.createElement("tr");
      tr.append(name, surname);
      tbody.append(tr);
    });
};
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = document.querySelector("#fullname").value;
  const [name, surname] = fullName.split(" ");
  console.log([name, surname]);
  const obj = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_KEY));
  console.log(obj);
  if (obj && obj.length > 0) {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify([...obj, { name, surname }])
    );
  } else {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify([{ name, surname }])
    );
  }
  renderUsersTable();
});

renderUsersTable();

document.querySelector("input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const fullName = e.target.value;
    const [name, lastName] = fullName.split(" ");

    const person = {
      name,
      lastName,
    };
    if (!localStorage.getItem("people")) {
      const personArray = [person];
      localStorage.setItem("people", JSON.stringify(personArray));
    } else {
      const entry = JSON.parse(localStorage.getItem("people"));
      entry.push(person);
      localStorage.setItem("people", JSON.stringify(entry));
    }

    generateTableEntry(person);

    e.target.value = "";
  }
});

function generateTableEntry(person) {
  const table = document.querySelector("table");
  const row = document.createElement("tr");
  const nameTd = document.createElement("td");
  const lastNameTd = document.createElement("td");

  nameTd.textContent = person.name;
  lastNameTd.textContent = person.lastName;
  row.append(nameTd, lastNameTd);
  table.append(row);
}
