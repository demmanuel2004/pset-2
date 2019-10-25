const readlineSync = require("readline-sync");

const hourly_wage = Number(readlineSync.question("\nHourly Wage: "));
const monday = Number(readlineSync.question("Monday: "));
const tuesday = Number(readlineSync.question("Tuesday: "));
const wednesday = Number(readlineSync.question("Wednesday: "));
const thursday = Number(readlineSync.question("Thursday: "));
const friday = Number(readlineSync.question("Friday: "));
const saturday = Number(readlineSync.question("Saturday: "));
const sunday = Number(readlineSync.question("Sunday: "));



let total = (monday*hourly_wage)+(tuesday*hourly_wage)+(wednesday*hourly_wage)+(thursday*hourly_wage)+(friday*hourly_wage)+(saturday*hourly_wage)+(sunday*hourly_wage)
total = total.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});


console.log("\nYou'll make " + total + " this week." );
