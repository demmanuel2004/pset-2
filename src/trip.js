const readlineSync = require("readline-sync");



const students = Number(readlineSync.question("Students: "));

const teachers = Number(readlineSync.question("Teachers: "));

const bus_capacity = Number(readlineSync.question("Bus Capacity: "));



let bus_total = Math.trunc((students+teachers)/bus_capacity) + 1;

let lastBusPeople = (students + teachers) % bus_capacity;



console.log(+ bus_total + " bus(es) is (are) needed, with " + lastBusPeople +  " passenger(s) on the last bus.\n");
