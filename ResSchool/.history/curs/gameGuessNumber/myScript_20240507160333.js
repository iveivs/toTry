const inputData = document.querySelector('.inputData')
const submitBtn = document.querySelector('.submitBtn')
console.log('test');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let inputInfo
    inputData.addEventListener('input', (event) => {
        return inputInfo = event.target.value

    })
    console.log(inputInfo);
} )

