let secretNumber;
let attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    document.getElementById('result').innerText = '';
}

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    attempts++;

    if (userGuess == secretNumber) {
        document.getElementById('result').innerText = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    } else {
        document.getElementById('result').innerText = 'Wrong guess. Try again.';
    }
}

function playAgain() {
    startGame();
    document.getElementById('userGuess').value = '';
}

window.onload = startGame;
