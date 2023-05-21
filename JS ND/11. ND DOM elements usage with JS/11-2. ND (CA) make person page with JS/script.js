const bodytag = document.querySelector("body");
const divContainer = document.createElement("div");
const image = document.createElement("img");
const h1tag = document.createElement("h1");
const h3tag = document.createElement("h3");
const h3tag2 = document.createElement("h3");

h1tag.textContent = "Trent Walton";
h3tag.textContent = "Founder & ⅓ of @paravelinc";
h3tag2.textContent = "Austin, TX";

bodytag.style.cssText =
  "font-family: 'Inter', sans-serif; background-color: #e1eef4; text-align: center;";
divContainer.style.cssText =
  "border-radius: 1em; width: 95%; height: 80vh; margin: 6rem auto; background-color: white; text-align: center;";
image.src =
  "https://i.pinimg.com/originals/d9/56/9b/d9569bbed4393e2ceb1af7ba64fdf86a.jpg";
image.style.cssText =
  "border: 3px solid white; box-shadow: 1px 1px 6px 2px lightgrey; border-radius: 50%; width: 200px; position: relative; bottom: 4em;";
h1tag.style.cssText =
  "letter-spacing: 0.5px; position: relative; bottom: 2em; font-weight: bold; color: #525252; margin: 10px;";
h3tag.style.cssText =
  "letter-spacing: 0.5px; position: relative; bottom: 3.5em; color: #ababab;";
h3tag2.style.cssText =
  "letter-spacing: 0.5px; position: relative; bottom: 3.5em; color: #ababab;";
bodytag.append(divContainer);
divContainer.append(image, h1tag, h3tag, h3tag2);
