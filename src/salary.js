const readlineSync = require("readline-sync");

const ANNUAL_SALARY = Number(readlineSync.question("\nAnnual Salary: "));

const PRETAX = 0.07;
const FED_INCOME_TAX = 0.157;
const STATE_INCOME_TAX = 0.0447;
const SOC_SEC_TAX = 0.062;
const MED_TAX = 0.0145;
const BI_MONTHLY_PAY = 24;


let payCheck = ANNUAL_SALARY;
let preTaxSalary = payCheck - (payCheck * PRETAX);
let totalDeductionPercentage = FED_INCOME_TAX + STATE_INCOME_TAX + SOC_SEC_TAX + MED_TAX;

let annualPayCheck = preTaxSalary - (preTaxSalary * totalDeductionPercentage)
let netPayCheck = annualPayCheck / BI_MONTHLY_PAY;

netPayCheck = netPayCheck.toLocaleString("en", { style: "currency", currency: "USD" })

console.log("\nYour take-home pay each check will be " + netPayCheck + ".");
