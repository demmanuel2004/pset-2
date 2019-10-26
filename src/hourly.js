const readlineSync = require("readline-sync");

const HOURLY_WAGE = Number(readlineSync.question("\nHourly Wage: "));
const MONDAY = Number(readlineSync.question("Monday: "));
const TUESDAY = Number(readlineSync.question("Tuesday: "));
const WEDNESDAY = Number(readlineSync.question("Wednesday: "));
const THURSDAY = Number(readlineSync.question("Thursday: "));
const FRIDAY = Number(readlineSync.question("Friday: "));
const SATURDAY = Number(readlineSync.question("Saturday: "));
const SUNDAY = Number(readlineSync.question("Sunday: "));



let total = (MONDAY*HOURLY_WAGE)+(TUESDAY*HOURLY_WAGE)+(WEDNESDAY*HOURLY_WAGE)+(THURSDAY*HOURLY_WAGE)+(FRIDAY*HOURLY_WAGE)+(SATURDAY*HOURLY_WAGE)+(SUNDAY*HOURLY_WAGE)
total = total.toLocaleString("en", {maximumFractionDigits: 2, minimumFractionDigits: 2});


console.log("\nYou'll make $" + total + " this week." );
