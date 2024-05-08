const inputData = document.querySelector('.inputData')
const submitBtn = document.querySelector('.submitBtn')
submitBtn.addEventListener('click', (e) => {
    console.log(e.target.value);
} )

inputData.addEventListener('submit', (e) => {
    console.log(e.target.value);
})