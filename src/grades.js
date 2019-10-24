const readlineSync = require("readline-sync");


let grade2 = Number(readlineSync.question("\ngrade1: "));
let grade1 = Number(readlineSync.question("grade2: "));
let grade3 = Number(readlineSync.question("grade3: "));

let width_mm = widthInInches * IN_TO_MM;
let length_mm = lengthInInches * IN_TO_MM;
let area = width_mm * length_mm;

widthInInches = String(widthInInches);
lengthInInches = String(lengthInInches);

console.log("\nA(n) " + widthInInches + "-by-" + lengthInInches + "-inch sheet of paper has an area of " + area + " square millimeter(s)." );
