const mainTag = document.querySelector("main");

const cityList = document.createElement("ul");

const cityListItem1 = document.createElement("li");
cityListItem1.textContent = "Vilnius";
const cityListItem2 = document.createElement("li");
cityListItem2.textContent = "Kaunas";
const cityListItem3 = document.createElement("li");
cityListItem3.textContent = "Klaipeda";

cityList.append(cityListItem1, cityListItem2, cityListItem3);

const cityInput = document.createElement("input");
cityInput.type = "text";
cityInput.addEventListener("keypress", (e) => {
  // const warningText = document.querySelector('p');
  // if (warningText) {
  //   warningText.remove();
  // }

  if (e.key === "Enter") {
    const inputValue = e.target.value;
    if (checkIfCityAlreadyExists(inputValue)) {
      if (!document.querySelector("p")) {
        const cityAlreadyExistsWarning = document.createElement("p");
        cityAlreadyExistsWarning.textContent = "City already exists";
        mainTag.append(cityAlreadyExistsWarning);
        setTimeout(() => {
          cityAlreadyExistsWarning.remove();
        }, 3000);
      }
    } else {
      const newCityLiElement = document.createElement("li");
      newCityLiElement.textContent = inputValue;
      cityList.append(newCityLiElement);
    }

    e.target.value = "";
  }
});

function checkIfCityAlreadyExists(inputValue) {
  const allCities = document.querySelectorAll("li");
  for (let i = 0; i < allCities.length; i++) {
    if (inputValue.toLowerCase() === allCities[i].textContent.toLowerCase()) {
      return true;
    }
  }
  return false;
}

mainTag.append(cityList, cityInput);
