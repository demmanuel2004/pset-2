const readlineSync = require("readline-sync");

console.log("Enter 3 homework grades" );
const GRADE_1 = Number(readlineSync.question(" "));
const GRADE_2 = Number(readlineSync.question(" "));
const GRADE_3 = Number(readlineSync.question(" "));

console.log("Enter 3 quiz grades" );
const GRADE_4 = Number(readlineSync.question(" "));
const GRADE_5 = Number(readlineSync.question(" "));
const GRADE_6 = Number(readlineSync.question(" "));

console.log("Enter 3 test grades" );
const GRADE_7 = Number(readlineSync.question(" "));
const GRADE_8 = Number(readlineSync.question(" "));
const GRADE_9 = Number(readlineSync.question(" "));

let homework_grade = ((GRADE_1+GRADE_2+GRADE_3)/3 * 0.15);
let quiz_grade = ((GRADE_4+GRADE_5+GRADE_6)/3 * 0.35);
let test_grade = ((GRADE_7+GRADE_8+GRADE_9)/3* 0.50);
let average_grade = homework_grade+quiz_grade+test_grade;
average_grade = average_grade.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});

console.log("\nYour marking period grade is " + average_grade +  "" );
