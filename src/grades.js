const readlineSync = require("readline-sync");

console.log("Enter 3 homework grades" );
const grade1 = Number(readlineSync.question("\n "));
const grade2 = Number(readlineSync.question(" "));
const grade3 = Number(readlineSync.question(" "));

console.log("Enter 3 quiz grades" );
const grade4 = Number(readlineSync.question(" "));
const grade5 = Number(readlineSync.question(" "));
const grade6 = Number(readlineSync.question(" "));

console.log("Enter 3 test grades" );
const grade7 = Number(readlineSync.question(" "));
const grade8 = Number(readlineSync.question(" "));
const grade9 = Number(readlineSync.question(" "));

let homework_grade = ((grade1+grade2+grade3)/3 * 0.15);
let quiz_grade = ((grade4+grade5+grade6)/3 * 0.35);
let test_grade = ((grade7+grade8+grade9)/3* 0.50);
let average_grade = homework_grade+quiz_grade+test_grade;

console.log("\nYour marking period grade is " + average_grade +  "" );
