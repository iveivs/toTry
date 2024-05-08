const inputData = document.querySelector('.inputData')
const submitBtn = document.querySelector('.submitBtn')
const resultBox = document.querySelector('.results')
const lastResult = doc

let randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    checkAnswer()
} )

function checkAnswer() {
    const userNumber = +inputData.value
    if(userNumber === randomNumber) {
        console.log('win');
    } else if(userNumber > randomNumber) {
        console.log('hi');
        inputData.value = ''
    } else if(userNumber < randomNumber) {
        console.log('low');
        inputData.value = ''
    }
    
}