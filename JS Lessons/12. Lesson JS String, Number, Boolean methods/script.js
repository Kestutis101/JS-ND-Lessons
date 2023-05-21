// const test = true;

// test.toString();

// console.log(typeof test); // boolean

const test = 25;

console.log(typeof test.toString()); // string

const test2 = 25;

console.log(test2.toExponential()); // jei netelpa i input ar kazkoki kita vieta jis pakelia "x10"

const test3 = 25.45654654;

console.log(test3.toFixed(15)); // prideda papildomai po kablelio skaicius pagal parametra

const test4 = 25.45654654;

console.log(test4.toPrecision(15)); // tai yra stringas nebe skaicius, toPrecision konvertuoja

const test5 = "hello world";

console.log(test5.length); // paraso kiek yra jo ilgis skaiciaus formatu

const test6 = "hello world";

console.log(test6.slice(4, 7)); // skaiciuoja nuo 0 ir 7 neieina i skaiciavima. paima tik tam tikras reiksmes pagal parametrus

const test7 = "hello world";

console.log(test7.slice(-4, -1)); // - parametre pasako, kad paimtu is galo teksto

const test8 = "hello world";

console.log(test8.substring(-4, -1)); // panasus i "slice" bet kitoks

const test9 = "hello world";

console.log(test9.substr(4, 5)); // paima 5 character ir ta tarpa tarp zodziu. galima "-" reiksme

const test10 = "hello world hello";

console.log(test10.replace("hello", "goodbye")); // jis pakeicia tik pati pirma zodi bet nepakeicia originalo

const test11 = "hello world hello";

console.log(test11.replace(/HELLO/i, "goodbye")); // jis pakeicia tik pati pirma zodi ne keysensitive  bet nepakeicia originalo

const test12 = "hello world hello";

console.log(test12.replace(/hello/g, "goodbye")); // jis pakeicia rastus zodzius pagal parametra

const test13 = "hello world hello";

console.log(test13.replaceAll("hello", "goodbye")); // jis pakeicia visus rastus zodzius "hello"

const test14 = "hello world hello";

console.log(test14.toLowerCase()); // konvertuoja i mazasias raides

const test15 = "hello world hello";

console.log(test15.toUpperCase()); // konvertuoja i didziasias raides

const test16 = "hello world hello";
const test17 = "hello part 2";
console.log(test16.concat(test17)); // sujungia 2 kintamuossius pavyzdys 1. pridedam kiek norim stringu ir juos sujungiam. originalaus nekeicia
console.log(test16 + test17); // sujungia 2 kintamuossius pavyzdys 2

const test18 = "      hello world hello     ";

console.log(test18.trim()); // nutrina tarpus, kad isvengt kazkokiu klaidu ieskant databse

const test19 = "      hello world hello     ";

console.log(test19.trimStart()); // nutrina tarpus priekyje, kad isvengt kazkokiu klaidu ieskant databse

const test20 = "      hello world hello     ";

console.log(test20.trimEnd()); // nutrina tarpus gale, kad isvengt kazkokiu klaidu ieskant databse

const test21 = "hello world hello";

console.log(test21.padStart(50, "x")); // (string metodai) prideda i pradzia tiek simboliu kiek reikia kad uzpildytu kol bus uzpildyta pagal parametrus

const test22 = "hello world hello";

console.log(test22.padEnd(50, "x")); // (string metodai) prideda i gala tiek simboliu kiek reikia kad uzpildytu kol bus uzpildyta pagal parametrus

const test23 = "hello world hello";

console.log(test23.charAt(8)); // patikrina koki characteri pasirinke esate parametre

const test24 = "hello world hello";

console.log(test24.charCodeAt(8)); // galima naudoti ir "[]" grazina utf-16 koduotes atitikmeni musu characteriui nuo 0 iki konkrecios vietos

const test25 = "hello world hello";

console.log(test25.split("o".join(""))); //skaldo i areju ir galima sujungt su .join
