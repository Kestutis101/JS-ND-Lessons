//? Create an HTML form that allows the user to enter their favorite book and movie.
//? The form should have the following elements:

//? A text input for the title of the book
//? A textarea for a short description of the book
//? A text input for the title of the movie
//? A textarea for a short description of the movie
//? A submit button
//? Use JavaScript to retrieve the values of the form elements when the submit button is clicked.
//? When the submit button is clicked, display an alert message with the information
//? that the user entered in the following format:
//? "Book: [title]\nDescription: [description]\nMovie: [title]\nDescription: [description]"

const bookTitle = document.querySelector("input[name='book-title']");
const bookDescription = document.querySelector(
  "textarea[name='book-description']"
);
const movieTitle = document.querySelector("input[name='movie-title']");
const movieDescription = document.querySelector(
  "textarea[name='movie-description']"
);

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`
Book: ${bookTitle.value}
Book Description: ${bookDescription.value}
Movie: ${movieTitle.value}
Movie Description: ${movieDescription.value}`);
});
