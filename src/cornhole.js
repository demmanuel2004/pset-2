const readlineSync = require("readline-sync");

const LENGTH_IN = 48;
const WIDTH_IN = 24;
const DIAMETER_IN = 6;

let areaOfBoard = LENGTH_IN * WIDTH_IN;
let radius = DIAMETER_IN / 2;
let areaOfCircle = Math.PI * (radius ** 2);
let surfaceAreaOfCornhole = areaOfBoard - areaOfCircle;

surfaceAreaOfCornhole = surfaceAreaOfCornhole.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("The surface area of a standard Cornhole board is " + surfaceAreaOfCornhole + " square inch(es).");
