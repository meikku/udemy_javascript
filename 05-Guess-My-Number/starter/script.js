'use strict';

/*
console.log(document.querySelector('.message').textContent);

console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const setSecretNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = setSecretNumber();
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('🤷🏻‍♀️ No number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎈 Correct number!');
    setNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.label-score').textContent = score;
    } else {
      document.querySelector('.label-score').textContent = '0';
      displayMessage('⌛️ Game over...');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  score = '20';
  document.querySelector('.label-score').textContent = score;
  secretNumber = setSecretNumber();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  setNumber('?');
  displayMessage('Start guessing...');
});
