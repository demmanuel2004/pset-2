const readlineSync = require("readline-sync");

const IN_TO_MM = 25.4;

let lengthInInches = Number(readlineSync.question =("\nWidth: "));
let widthInInches; = Number(readlinesync.question =("\nLength: "));

let lengthInMillimeters = IN_TO_MM*lengthInInches;
let widthInMillimeters = IN_TO_MM*widthInMillimeter;
let areaInMillimeters = widthInMillimeter*lengthInMillimeters;

console.log("\nA(n)" + lengthInInches + " -by-" + widthInInches +  "inch sheet of paper has an area of about "
