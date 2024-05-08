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
    const userNumber = +inputData.value
    if(userNumber === randomNumber) {
        console.log('win');
    } else if(userNumber <)
    
}