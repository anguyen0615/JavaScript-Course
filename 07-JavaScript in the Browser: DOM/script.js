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
const checkBtn = document.querySelector(".check");
const guess = document.querySelector(".guess");

checkBtn.addEventListener("click", function () {
  console.log(guess.value);
});
