const readlineSync = require("readline-sync");

const students = Number(readlineSync.question("Students: "));
const teachers = Number(readlineSync.question("Teachers: "));
const bus_capacity = Number(readlineSync.question("Bus Capacity: "));

let bus_total = (students+teachers)/bus_capacity
let lastBusPeople = bus_total % bus_capacity;

console.log(+ bus_total + "\nbus(es) is (are) needed, with" + lastBusPeople +  " passenger(s) on the last bus.\n");
