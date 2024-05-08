const inputData = document.querySelector('.inputData')
const submitBtn = document.querySelector('.submitBtn')
console.log('test');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let data = inputData.value
    console.log(data);
} )

function getRandomNumber()