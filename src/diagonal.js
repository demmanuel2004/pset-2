const readlineSync = require("readline-sync");



let width_in = Number(readlineSync.question("\nWidth: "));
let length_in = Number(readlineSync.question("Length: "));

const diagonal =Math.sqrt(width_in*length_in)

console.log("\nA(n) " + width_in + "-by-" + length_in + "-inch sheet of paper has a diagonal of " + diagonal + " inch(es)." );
