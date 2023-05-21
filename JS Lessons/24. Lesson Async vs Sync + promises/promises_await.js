//! Promises with async/await

//? rewrite previous example with async/await

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => console.log(data))

const asyncFunction = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
};

// asyncFunction();

//? Promise.all with async/await

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, "start");
});

const promise3 = new Promise((resolve) => {
  setTimeout(resolve, 1500, "second promise fullfilled");
});

const promise4 = new Promise((resolve) => {
  setTimeout(resolve, 300, "last promise fullfilled");
});

//.then
// Promise.all([promise2, promise3, promise4]).then((data) => console.log(data));

//async/await
async function waitForAll() {
  const data = await Promise.all([promise2, promise3, promise4]);
  console.log(data);
}

// waitForAll();

//? error with async/await

const catchError = async () => {
  try {
    const resultPromiseTwo = await promise2;
    console.log(resultPromiseTwo);
  } catch (err) {
    console.log("error caught: " + err);
  } finally {
    console.log("finished working with promise");
  }
};
catchError();
