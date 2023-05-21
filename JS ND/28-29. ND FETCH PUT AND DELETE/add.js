const ENDPOINT = "https://golden-whispering-show.glitch.me";

const imageInput = document.querySelector("#image-input");
const priceInput = document.querySelector("#price-input");
const titleInput = document.querySelector("#title-input");

document.querySelector("#add-button").addEventListener("click", async () => {
  const image = imageInput.value;
  const price = priceInput.value;
  const title = titleInput.value;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      title,
      price,
    }),
  });
  const data = await res.json();

  document.location.replace("/index.html");
});
