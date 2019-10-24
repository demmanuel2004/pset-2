const readlineSync = require("readline-sync");

const IN_TO_MM = 25.4;

let widthInInches = Number(readlineSync.question("Width: "));
let lengthInInches = Number(readlineSync.question("Length: "));

let width_mm = widthInInches * IN_TO_MM;
let length_mm = lengthInInches * IN_TO_MM;
let area = width_mm * length_mm;

width_in = String(width_in);
length_in = String(length_in);

console.log("\nA(n) " + widthInInches + "-by-" + lengthInInches + "-inch sheet of paper has an area of " + area + " square millimeter(s)." );
