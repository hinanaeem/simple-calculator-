#! /usr/bin/env node
import inquirer from "inquirer";
const calculator = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "firstNumber"
    },
    { message: "Enter your second number",
        type: "number",
        name: "secondNumber" },
    { message: "select your operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponentiation", "Percentage"], }
]);
//conditional statement
if (calculator.operator === "Addition") {
    console.log(calculator.firstNumber + calculator.secondNumber);
}
else if (calculator.operator === "Subtraction") {
    console.log(calculator.firstNumber - calculator.secondNumber);
}
else if (calculator.operator === "Subtraction") {
    console.log(calculator.firstNumber - calculator.secondNumber);
}
else if (calculator.operator === "Multiplication") {
    console.log(calculator.firstNumber * calculator.secondNumber);
}
else if (calculator.operator === "Division") {
    console.log(calculator.firstNumber / calculator.secondNumber);
}
else if (calculator.operator === "Modulus") {
    console.log(calculator.firstNumber % calculator.secondNumber);
}
else if (calculator.operator === "Exponentiation") {
    console.log(calculator.firstNumber ** calculator.secondNumber);
}
else if (calculator.operator === "Percentage") {
    console.log((calculator.firstNumber / calculator.secondNumber) * 100);
}
else {
    console.log("please select valid operator");
}
;
