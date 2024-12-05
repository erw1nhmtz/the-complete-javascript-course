'use strict';

// Selecting elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);

const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;

const switchPlayer = function() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
};

// Rolling dice
btnRoll.addEventListener(`click`, function() {
    if (!isPlaying) return;

    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove(`hidden`);
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);

    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
});

// Holding 
btnHold.addEventListener(`click`, function() {
    if (!isPlaying) return;

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        // Finish the game
        isPlaying = false;
        diceEl.classList.add(`hidden`);

        document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
        document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
    } else {
        switchPlayer();
    }
});

// Starting new game
btnNew.addEventListener(`click`, function() {
    // Reset active player
    activePlayer = 0;
    player0El.classList.add(`player--active`);
    player1El.classList.remove(`player--active`);

    // Reset player winner
    player0El.classList.remove(`player--winner`);
    player1El.classList.remove(`player--winner`);

    // Reset total and current scores
    scores = [0, 0];
    score0El.textContent = 0;
    score1El.textContent = 0;

    currentScore = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    // Reset isPlaying flag
    isPlaying = true;
});