#! /usr/bin/env node
import inquirer from "inquirer"

// 1) Computer will Generate A Random Number
// 2) User Will guess Number
// Compare User Generated NUmber With Computer Generated Number And Show Result
const RandomNumber = Math.ceil(Math.random()*5)

const answer = await inquirer.prompt([{
    name : "userGuessedNumber",
    type : "number",
    message : "Guess A Number Between 1 To 5"
}])
if (answer.userGuessedNumber === RandomNumber) {
    console.log(`Congratulations You Guessed Right Number`);
    
} else {
    console.log(`You Guessed Wrong Number`);
    
}
