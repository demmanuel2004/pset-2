const readlineSync = require("readline-sync");

const ANNUAL_SALARY = Number(readlineSync.question("\nAnnual Salary: "));



const PRETAX = 0.07;
const FED_INCOME_TAX = 0.157;
const STATE_INCOME_TAX = 0.0447‬;
const SOC_SEC_TAX = 0.062‬;
const MED_TAX = 0.0145‬;

let totalDeductionPercentage = FED_INCOME_TAX + STATE_INCOME_TAX + SOC_SEC_TAX + MED_TAX + PRETAX;

let payCheck = ANNUAL_SALARY/2

let takeHomeCheck = payCheck*totalDeductionPercentage

console.log("\nYour take-home pay each check will be " + takeHomeCheck + ".");
