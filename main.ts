#! /usr/bin/bin/env node
import inquirer from "inquirer";
//1 Computer will generate a random number

//2 user input for guessing number

//3 compare user input with computr generated number and show result

const randomNumber = Math.floor(Math.random()*10+1);

let answer = await inquirer.prompt([
  {
    message: "Please Select A Random Number between 1 to 10:",
    type: "number",
    name: "userGuessNumber",
  },
]);

if (answer.userGuessNumber === randomNumber) {
  console.log("Congrats! You Guess a right Number.");
} else {
  console.log("OOP! You Guess a wrong Number \n BETTER LUCK NEXT TIME");
}
