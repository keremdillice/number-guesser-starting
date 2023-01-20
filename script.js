let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
    const userDistance = Math.abs(userGuess - targetNumber);
    const computerDistance = Math.abs(computerGuess - targetNumber);
    if (userDistance <= computerDistance) {
        return true;
    } else return false;
} 

const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore++;
        case 'computer':
            computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}