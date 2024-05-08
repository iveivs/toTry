const inputData = document.querySelector('.inputData')
const submitBtn = document.querySelector('.submitBtn')
const resultBox = document.querySelector('.results')
const lastResult = document.querySelector('.lastResult')
const guesses = document.querySelector('.guesses')
const lowOrHi = document.querySelector('.lowOrHi')

let guessCount = 1
let resetButton

let randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    checkAnswer()
} )

function checkAnswer() {
    const userNumber = +inputData.value
    if(guessCount === 1) {
        guesses.textContent = "Previous guesses:"
    }
    guesses.textContent += userNumber + ' ';

    if(userNumber === randomNumber) {
        lastResult.style.backgroundColor = 'green'
        lastResult.textContent = 'You are win!'
        lowOrHi.textContent = '';
        gameOver()
    } else if(guessCount === 10) {
        lastResult.textContent = 'GAME OVER'
        lowOrHi.textContent = '';
        gameOver()

    }else {
        lastResult.textContent = 'Wrong'
        lastResult.style.backgroundColor = 'red'
        if (userNumber < randomNumber) {
            lowOrHi.textContent = 'to low'
        } else if(userNumber > randomNumber) {
            lowOrHi.textContent = 'to hi'
        }
    }

    guessCount++
    inputData.value = '';
}

function gameOver () {
    inputData.disabled = true
    submitBtn.disabled = true
    resetButton = document.createElement('button')
    resetButton.textContent = 'Start new game?'
    document.body.append(resetButton)
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1
    const resetParas = document.querySelectorAll('.results p');
    for(const resetPar of resetParas) {
        resetPar.textContent = ''
    }
    inputData.disabled = false
    submitBtn.disabled = false
    inputData.value = ''

    lastResult.style.backgroundColor = 'white';
}
