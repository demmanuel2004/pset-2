const readlineSync = require("readline-sync");

const STUDENTS = Number(readlineSync.question("Students: "));
const TEACHERS = Number(readlineSync.question("Teachers: "));
const BUS_CAPACITY = Number(readlineSync.question("Bus Capacity: "));

let bus_total = Math.trunc((STUDENTS+TEACHERS)/BUS_CAPACITY) + 1;
let lastBusPeople = (STUDENTS + TEACHERS) % BUS_CAPACITY;

console.log(+ bus_total + " bus(es) is (are) needed, with " + lastBusPeople +  " passenger(s) on the last bus.\n");
