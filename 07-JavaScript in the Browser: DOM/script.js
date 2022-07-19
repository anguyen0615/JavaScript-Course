// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const message = document.querySelector(".message").textContent;

console.log(message);

// 72. Selecting and Manipulating elements

document.querySelector(".message").textContent = "👌 Correct Number";

const message2 = document.querySelector(".message").textContent;
console.log(message2);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value;
document.querySelector(".guess").value = 23;
*/

// 73. Handling Click Event
// 74. Implementing game logic
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const scoreValue = document.querySelector(".score");
let score = 20;
document.querySelector(".number").textContent = secretNumber;

checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if(!guess){
    message.textContent = "Please enter a number..";
  }
  else if(guess === secretNumber){
    message.textContent = "Correct number!";
  }
  else if(guess > secretNumber){
    message.textContent = "Too high!";
    score--;
    scoreValue.textContent = score;
  }
  else if(guess < secretNumber){
    message.textContent = "Too low!"
    score--;
    scoreValue.textContent = score;
  }
});