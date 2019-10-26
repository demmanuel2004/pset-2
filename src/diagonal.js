const readlineSync = require("readline-sync");

let width_in = Number(readlineSync.question("\nWidth: "));
let length_in = Number(readlineSync.question("Length: "));

let diagonal = Math.hypot(width_in, length_in);
diagonal = diagonal.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nA(n) " + width_in + "-by-" + length_in + "-inch sheet of paper has a diagonal of " + diagonal + " inch(es)." );
