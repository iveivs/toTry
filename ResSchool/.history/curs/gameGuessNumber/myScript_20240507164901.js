const inputData = document.querySelector('.inputData')
const submitBtn = document.querySelector('.submitBtn')
const resultBox = document.querySelector('.results')
const lastResult = document.querySelector('.lastResult')
const guesses

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
    if(userNumber === randomNumber) {
        lastResult.textContent = 'WIN'
        gameOver()
    } else if(userNumber > randomNumber) {
        lastResult.textContent = 'To Hi'
        inputData.value = ''
    } else if(userNumber < randomNumber) {
        lastResult.textContent = 'To Low'
        inputData.value = ''
    }
}

function gameOver () {
    inputData.disabled = true
    submitBtn.disabled = true
}