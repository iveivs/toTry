const inputData = document.querySelector('.inputData')
const submitBtn = document.querySelector('.submitBtn')
// submitBtn.addEventListener('submit', )

inputData.addEventListener('submit', (e) => {
    console.log(e.target.value);
})