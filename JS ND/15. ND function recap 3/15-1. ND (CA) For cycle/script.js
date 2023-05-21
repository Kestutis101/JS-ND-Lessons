const data = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Wuthering Heights", author: "Emily Brontë", year: 1847 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
];

const bookTable = document.querySelector("table");

document.querySelector("button").addEventListener("click", generateTable);

function generateTable() {
  for (let index = 0; index < data.length; index++) {
    const tr = document.createElement("tr");

    const title = document.createElement("td");
    title.textContent = data[index].title;
    const author = document.createElement("td");
    author.textContent = data[index].author;
    const year = document.createElement("td");
    year.textContent = data[index].year;

    tr.append(title, author, year);
    bookTable.append(tr);
  }
}
