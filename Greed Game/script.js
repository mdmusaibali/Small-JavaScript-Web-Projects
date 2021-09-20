"use strict";
const score0El = document.querySelector(".score--0");
const score1El = document.querySelector(".score--1");
const current0El = document.querySelector(".current--0");
const current1El = document.querySelector(".current--1");
const diceImg = document.querySelector(".dice-img");
const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");
const btnAgain = document.querySelector(".again");
const box0 = document.querySelector(".player--0");
const box1 = document.querySelector(".player--1");
// declaring variables
let currentScore, activePlayer, scores, playing;
//functions
const switchPlayer = function () {
  current0El.textContent = 0;
  current1El.textContent = 0;
  //   document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  box0.classList.toggle("player--active");
  box1.classList.toggle("player--active");
};
const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = 1;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  document.querySelector(".player--0").classList.remove("winner");
  document.querySelector(".player--1").classList.remove("winner");
};
init();
//Event Listners
btnRoll.addEventListener("click", function () {
  if (playing === 1) {
    //Rolling dice
    let diceNumber = Math.trunc(Math.random() * 6 + 1);
    diceImg.classList.remove("hidden");
    diceImg.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      activePlayer === 0
        ? (current0El.textContent = currentScore)
        : (current1El.textContent = currentScore);
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing === 1) {
    scores[activePlayer] += currentScore;
    document.querySelector(`.score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = 0;
      diceImg.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("winner");
    } else {
      switchPlayer();
    }
  }
});

btnAgain.addEventListener("click", init);
