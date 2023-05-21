//! Task: 1

// const renderUserCard = (user) => {
//   const img = document.createElement("img");
//   img.src = user.picture.large;
//   img.alt = `${user.name.first} profile picture`;

//   const intro = document.createElement("h2");
//   intro.textContent = `${user.name.first} ${user.name.last} ${user.dob.age}`;

//   const contacts = document.createElement("h3");
//   contacts.textContent = user.email;

//   const card = document.createElement("div");
//   card.append(img, intro, contacts);
//   document.body.append(card);
// };

// const fetchRandomUser = async () => {
//   try {
//     const response = await fetch("https://randomuser.me/api/");
//     if (response) {
//       const data = await response.json();
//       renderUserCard(data.results[0]);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchRandomUser();

//! Task: 2

// const url = "https://boiling-reaches-93648.herokuapp.com/week-3/party";

// const checkIfPersonVIP = (guests, guestName) => {
//   const guest = guests.find((guest) => guest.name === guestName);
//   document.body.textContent = guest
//     ? `${guestName} ${guest.vip ? "is" : "isn't"} a VIP`
//     : `${guestName} isn't found in the guest list`;
// };

// const fetchPartyGuests = async () => {
//   try {
//     const response = await fetch(
//       "https://boiling-reaches-93648.herokuapp.com/week-3/party"
//     );
//     if (response.ok) {
//       const guests = await response.json();
//       checkIfPersonVIP(guests, "Kristupas Lapeika");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchPartyGuests();

//! Task: 3

const displayGuests = (guests) => {
  const tbody = document.querySelector("tbody");
  guests.forEach((guest) => {
    const name = document.createElement("td");
    name.innerText = guest.name;

    const attending = document.createElement("td");
    attending.innerText = guest.attending ? "+" : "-";

    const plusOne = document.createElement("td");
    plusOne.innerText = guest.plusOne ? "+" : "-";

    const tr = document.createElement("tr");
    tr.append(name, attending, plusOne);
    tbody.append(tr);
  });
};

const fetchPartyGuests = async () => {
  try {
    const response = await fetch(
      "https://boiling-reaches-93648.herokuapp.com/week-3/wedding"
    );
    if (response) {
      const guests = await response.json();
      displayGuests(guests);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchPartyGuests();
