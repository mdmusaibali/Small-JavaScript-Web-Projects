"use strict";
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMsg = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input-field").value);
  if (!guess) {
    displayMsg("⛔ No number");
  } else if (guess === randomNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    displayMsg("🎉 Correct Guess");
    document.querySelector(".secret-number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "rgb(86, 156, 58)";
  } else if (guess !== randomNumber) {
    if (score > 1) {
      guess < randomNumber
        ? displayMsg("A little higher")
        : displayMsg("A little lower");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      displayMsg("🎃 You loose");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  displayMsg("Start Guessing. . .");
  document.querySelector(".input-field").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".secret-number").textContent = "?";
});
