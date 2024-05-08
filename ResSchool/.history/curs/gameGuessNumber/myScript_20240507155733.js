const inputData = document.querySelector('.inputData')
const submitBtn = document.querySelector('.submitBtn')
submitBtn.addEventListener('click', (e) => {
    
    inputData.addEventListener('input', (event) => {
        console.log(e.target.value);
    })
} )

