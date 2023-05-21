const BASE_URL = "https://olive-bead-glazer.glitch.me";
const main = document.querySelector("main");
const body = document.querySelector("body");

body.append(main);

const brandInput = document.querySelector("#brand-input");
const modelInput = document.querySelector("#model-input");

document.querySelector("button").addEventListener("click", async (e) => {
  try {
    e.preventDefault();
    const brand = brandInput.value;
    const model = modelInput.value;

    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        brand,
        model,
      }),
    });
    const data = await res.json();

    const p = document.createElement("p");
    p.textContent = data.msg;
    main.append(p);

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } catch (err) {
    const paragraphErr = document.createElement("p");
    paragraphErr.textContent = err.msg;
    main.append(paragraphErr);
  }
});
