const price = prompt("Iveskite prekes kaina");
const isDeliveryNeeded = prompt(
  "Ar reikalingas pristatymas i namus? (taip/ne)"
);
let city;
const DELIVERY_FEE = 20;

if (isDeliveryNeeded === "taip") {
  city = prompt("I kuri miesta reikes pristatyti?");
}

// Prekės kaina : xx.xx€Pristatymas: xx.xx€Iš viso: xx.xx€Prekę pristatysime į "įvestas miestas" per 1-3 dienas.

if (isDeliveryNeeded !== "taip") {
  console.log(
    `Prekes kaina: ${price}$ \nPreke galima atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a`
  );
} else if (price >= 50 || city === "Vilnius") {
  console.log(
    `Prekės kaina : ${price} € \nPrekę pristatysime į ${city} per 1-3 dienas.`
  );
} else {
  console.log(
    `Prekės kaina :${price}€ \nPristatymas: ${DELIVERY_FEE}€ \nIš viso: ${
      +price + DELIVERY_FEE
    }€ \nPrekę pristatysime į ${city} per 1-3 dienas.`
  );
}
