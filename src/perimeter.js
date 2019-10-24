const readlineSync = require("readline-sync");

const IN_TO_CM = 2.54;

let width_in = Number(readlineSync.question("\nWidth: "));
let length_in = Number(readlineSync.question("Length: "));

let width_cm = width_in * IN_TO_CM;
let length_cm = length_in * IN_TO_CM;
let perimeter = (2*width_in + 2*length_in)*2.54;

width_in = String(width_in);
length_in= String(length_in);

console.log("\nA(n) " + width_in + "-by-" + length_in + "-inch sheet of paper has a perimeter of " + perimeter + " centimeters(s)." );
