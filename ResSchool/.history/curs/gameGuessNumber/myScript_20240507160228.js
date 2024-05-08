const inputData = document.querySelector('.inputData')
const submitBtn = document.querySelector('.submitBtn')
console.log('test');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let inputInfo
    inputData.addEventListener('input', (event) => {
        inputInfo = e.target.value
    })
    console.log(inputInfo);
} )

