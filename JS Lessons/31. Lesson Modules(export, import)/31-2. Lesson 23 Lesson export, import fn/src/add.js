import { makePostRequest } from "./utils/requests.js";

const ENDPOINT_URL = "https://olive-bead-glazer.glitch.me";

const brandInput = document.querySelector('input[name="brand"]');
const modelInput = document.querySelector('input[name="model"]');
const body = document.querySelector("body");

document.querySelector("button").addEventListener("click", async (e) => {
  const brand = brandInput.value;
  const model = modelInput.value;

  const carObj = {
    brand,
    model,
  };
  const res = await makePostRequest(ENDPOINT_URL, carObj);
  if (res.msg === "Duomenys irasyti") {
    showSuccessMessage();
  } else {
    throw new Error("FAILED");
  }
});

function showSuccessMessage() {
  const pTag = document.createElement("p");
  pTag.textContent = "Successfully! You added a car";

  body.append(pTag);

  setTimeout(() => {
    body.removeChild(pTag);
  }, 5000);
}
