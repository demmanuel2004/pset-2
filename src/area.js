const readlineSync = require("readline-sync");

const IN_TO_MM = 25.4;
let width_in = Number(readlineSync.question("Width: "));
let length_in = Number(readlineSync.question("Length: "));

let width_mm = width_in * IN_TO_MM;
let length_mm = length_in * IN_TO_MM;
let area = width_mm * length_mm;
