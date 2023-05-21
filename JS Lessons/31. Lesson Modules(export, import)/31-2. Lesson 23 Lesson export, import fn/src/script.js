import { makeGetRequest } from "./utils/requests.js"; // ../ pakyli i prieki... ./ jeigu nori lysti giliau
import { generateTableRow } from "./utils/generatingHtml.js";
const BASE_URL = "https://olive-bead-glazer.glitch.me";

const cars = await makeGetRequest(BASE_URL);

cars.forEach((car) => generateTableRow(car));
