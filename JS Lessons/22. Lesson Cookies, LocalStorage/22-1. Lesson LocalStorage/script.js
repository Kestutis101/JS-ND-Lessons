document.querySelector("button").addEventListener("click", () => {
  localStorage.setItem("test", "labas");
  localStorage.removeItem("test");
  sessionStorage.setItem("session-thing", "test");
});
localStorage.setItem("test", "labas");
console.log(localStorage.getItem("test"));
document.cookie = "name=Marius";
const now = new Date();
const later = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 7);
document.cookie = `lastName=asdf;expires=${now.toUTCString()}`;
console.log(document.cookie);
localStorage.setItem(
  "logged-in",
  JSON.stringify({
    value: true,
    expirationDate: later,
  })
);

console.log(JSON.parse(localStorage.getItem("logged-in")));

const loggedInJSON = localStorage.getItem("logged-in");

const loggedInObj = JSON.parse(loggedInJSON);
console.log(loggedInObj);
if (loggedInObj) {
  if (loggedInObj.expires > Date.now()) {
    setTimeout(() => {
      window.location.replace("https://www.google.lt/");
    }, 5000);
  } else {
    console.log("expired");
  }
}

const nameInput = document.querySelector("#name-input");
const passwordInput = document.querySelector("#password-input");

document.querySelector("button").addEventListener("click", () => {
  const name = nameInput.value;
  const password = passwordInput.value;
  const now = new Date();
  const expires = new Date(now.getTime() * 1000 * 60 * 60 * 24 * 7);
  localStorage.setItem(
    "logged-in",
    JSON.stringify({
      expires: expires.getTime(),
      value: true,
    })
  );
});
