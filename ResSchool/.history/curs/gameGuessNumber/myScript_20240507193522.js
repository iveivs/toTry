const inputData = document.querySelector('.inputData')
const submitBtn = document.querySelector('.submitBtn')
const resultBox = document.querySelector('.results')
const lastResult = document.querySelector('.lastResult')
const guesses = document.querySelector('.guesses')

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
        lastResult.textContent = 'WIN'
        gameOver()
    } else if(guessCount === 10) {
        lastResult.textContent = 'GAME OVER'
        gameOver()

    }else if(userNumber > randomNumber) {
        lastResult.textContent = 'To Hi'
        inputData.value = ''

    } else if(userNumber < randomNumber) {
        lastResult.textContent = 'To Low'
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
    
}
