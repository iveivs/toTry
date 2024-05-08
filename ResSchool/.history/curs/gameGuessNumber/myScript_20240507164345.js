const inputData = document.querySelector('.inputData')
const submitBtn = document.querySelector('.submitBtn')
const resultBox = document.querySelector('.results')
const lastResult = document.querySelector('.lastResult')

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
        console.log('win');
    } else if(userNumber > randomNumber) {
        lastResult.textContent = 'To Hi'
        inputData.value = ''
    } else if(userNumber < randomNumber) {
        lastResult.textContent = 'To Low'
        inputData.value = ''
    }
    
}