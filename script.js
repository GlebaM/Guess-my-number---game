'use strict';
//////////// MY APPROACH TO PROBLEM
// let score = 20;
// let highScoreValue = 0;
// //Message after btn click
// const message = document.querySelector('.message');
// //User guess
// const guess = document.querySelector('.guess');
// //displayed score
// const scoreDisplay = document.querySelector('.score');
// //Buttons Check and Reset (Again)
// const btnCheck = document.querySelector('.check');
// const btnAgain = document.querySelector('.again');
// //Drawing function - is invoked every refresh of page and on 'click' of btn Again returns
// const drawNumber = function() {
//     let draw = Math.trunc(Math.random() * 20 + 1);
//     return draw;
// };
// let draw = Number(drawNumber());
// const number = document.querySelector('.number');

// const startGame = function() {
//     const inputGuess = Number(guess.value);
//     //When number is zero or no number at all
//     if (!inputGuess) {
//         message.textContent = '⛔ No number!';
//         //When player wins
//     } else if (inputGuess === draw) {
//         message.textContent = 'Bravo, the prize is yours!!! 🎉🎁';
//         number.textContent = draw;
//         number.style.width = '25rem';
//         document.body.style.backgroundColor = '#60b347';
//         if (highScoreValue < score) {
//             highScoreValue = score;
//         }
//         // When guess is too high or too low
//     } else if (inputGuess >= 1 && inputGuess != draw && inputGuess <= 20) {
//         score--;
//         if (inputGuess > draw) {
//             message.textContent = '📈 Try again. Number is too high!!!';
//         } else {
//             message.textContent = '📉 Try again. Number is too low!!!';
//         }
//         //Guess outside the range
//     } else {
//         message.textContent = 'Number is not within the range!!!';
//     }
//     scoreDisplay.textContent = score;
//     document.querySelector('.highscore').textContent = highScoreValue;
// };

// btnCheck.addEventListener('click', startGame);
// //Reset button in action
// const resetGame = function() {
//     score = 20;
//     scoreDisplay.textContent = score;
//     message.textContent = 'Start guessing...';
//     draw = Number(drawNumber());
//     number.textContent = '?';
//     Number((guess.value = ''));
//     number.style.width = '15rem ';
//     document.body.style.backgroundColor = '#222';
// };

// btnAgain.addEventListener('click', resetGame);

// ///JONAS APPROACH

// // let secretNumber = Math.trunc(Math.random() * 20 + 1);

// let score = 20;
// let highScore = 0;
// const scoreDisplay = document.querySelector('.score');
// const number = document.querySelector('.number');
// const message = document.querySelector('.message');
// const guessHolder = document.querySelector('.guess');

// const displayMessage = function(content) {
//     message.textContent = content;
// };
// const lotto = function() {
//     return Math.trunc(Math.random() * 20 + 1);
// };
// let secretNumber = lotto();
// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(guessHolder.value);

//     // const loseGame = function(str) {
//     //     if (score > 1) {
//     //         message.textContent = str;
//     //         console.log('ways');
//     //         score--;
//     //         scoreDisplay.textContent = score;
//     //     } else {
//     //         message.textContent = 'You lost the game 😨';
//     //     }
//     // };
//     //When number is zero or no number at all
//     if (!guess) {
//         displayMessage('⛔ No number!');

//         //When player wins
//     } else if (guess === secretNumber) {
//         displayMessage('🎉 Correct Number!!!');
//         number.style.width = '25rem';
//         document.body.style.backgroundColor = '#60b347';
//         number.textContent = secretNumber;
//         // Highscore value update
//         if (highScore < score) {
//             highScore = score;
//         }
//         document.querySelector('.highscore').textContent = highScore;
//         // When guess is too high
//     } else if (guess !== secretNumber) {
//         if (score > 1) {
//             displayMessage(guess > secretNumber ? '📈 Too high!!!' : '📈 Too low!!!');
//             score--;
//             scoreDisplay.textContent = score;
//         } else {
//             displayMessage('You lost the game 😨');
//         }
//     }
//     //  else if (guess !== secretNumber) {
//     //   guess > secretNumber
//     //     ? loseGame('📈 Too high!!!')
//     //     : loseGame('📈 Too low!!!');
//     // }
//     // else if (guess > secretNumber) {
//     //     loseGame('📈 Too high!!!');
//     //     //When guess is too low
//     // } else if (guess < secretNumber) {
//     //     loseGame('📈 Too low!!!');
//     // }
// });

// //Reset button in action
// const btnAgain = document.querySelector('.again');
// const resetGame = function() {
//     score = 20;
//     scoreDisplay.textContent = score;
//     displayMessage('Start guessing...');
//     secretNumber = lotto();
//     number.textContent = '?';
//     guessHolder.value = '';
//     number.style.width = '15rem ';
//     document.body.style.backgroundColor = '#222';
// };

// btnAgain.addEventListener('click', resetGame);

///JONAS APPROACH clean

let score = 20;
let highScore = true ? localStorage.getItem('highScore') : '0';

const scoreDisplay = document.querySelector('.score');
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const guessHolder = document.querySelector('.guess');

const hScoreTContent = function(content) {
    document.querySelector('.highscore').textContent = content;
};
const displayMessage = function(content) {
    message.textContent = content;
};
const lotto = function() {
    return Math.trunc(Math.random() * 20 + 1);
};
let secretNumber = lotto();
hScoreTContent(highScore ? localStorage.getItem('highScore') : '0');

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(guessHolder.value);
    //When number is zero or no number at all
    if (!guess) {
        displayMessage('⛔ No number!');
        //When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!!!');
        number.style.width = '25rem';
        document.body.style.backgroundColor = '#60b347';
        number.textContent = secretNumber;
        // Highscore value update
        if (highScore < score) {
            highScore = score;
            localStorage.setItem('highScore', highScore);
        }
        hScoreTContent(localStorage.getItem('highScore'));
        // When guess is too high
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!!!' : '📈 Too low!!!');
            score--;
            scoreDisplay.textContent = score;
        } else {
            displayMessage('You lost the game 😨');
        }
    }
});

//Reset button in action
const btnAgain = document.querySelector('.again');
const resetGame = function() {
    score = 20;
    scoreDisplay.textContent = score;
    displayMessage('Start guessing...');
    secretNumber = lotto();
    number.textContent = '?';
    guessHolder.value = '';
    number.style.width = '15rem ';
    document.body.style.backgroundColor = '#222';
};
btnAgain.addEventListener('click', resetGame);