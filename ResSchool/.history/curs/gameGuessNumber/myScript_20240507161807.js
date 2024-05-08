const inputData = document.querySelector('.inputData')
const submitBtn = document.querySelector('.submitBtn')
let randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber);

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let data = inputData.value
    console.log(data);
} )

function checkAnswer() {
    const user
}