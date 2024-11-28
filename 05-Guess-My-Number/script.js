'use strict';

// * 1. Selecting and Manipulating elements

// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `Correct Number!`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;

// document.querySelector(`.guess`).value = 10;
// console.log(document.querySelector(`.guess`).value);


// * 2. Handling Click Events

// document.querySelector(`.check`).addEventListener(`click`, function () {
//     const guess = Number(document.querySelector(`.guess`).value);
//     console.log(guess, typeof guess);

//     if (!guess) {
//         document.querySelector(`.message`).textContent = `⛔ No number`;
//     }
// });


// * 3. Implementing Game Logic

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(`.message`).textContent = message;
}

document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess = Number(document.querySelector(`.guess`).value);

    if (!guess) {
        displayMessage(`⛔ No number!`);
    } else if (guess === secretNumber) {
        displayMessage(`🎉 Correct Number!`);
        document.querySelector(`.number`).textContent = secretNumber;

        document.querySelector(`body`).style.backgroundColor = `#60b347`;

        document.querySelector(`.number`).style.width = `30rem`;

        if (score > highScore) {
            highScore = score;
            document.querySelector(`.highscore`).textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);

            score--;
            document.querySelector(`.score`).textContent = score;
        } else {
            displayMessage(`💥 You lost the game!`);

            score--;
            document.querySelector(`.score`).textContent = score;
        }
    }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
    // Reset the variables
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(`.number`).textContent = `?`;
    score = 20;
    document.querySelector(`.score`).textContent = score;

    // Reset input and message
    document.querySelector(`.guess`).value = ``;
    displayMessage(`Start guessing...`);

    // Reset CSS styles
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
});