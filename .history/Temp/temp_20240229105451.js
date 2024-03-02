// const input1 = Number(document.querySelector('.input1').value);
// const input2 = Number(document.querySelector('.input2').value);

// function sumNum(num1, num2) {
//     const res = input1 + input2;
//     return res;
// }

// document.querySelector('.btn-operation1').addEventListener('click', function(){
//     sumNum();
// });
// document.querySelector('.output').innerText = sumNum(input1, input2); 

// - - - - - - - -

// document.querySelector('.btn-operation_sbros').addEventListener('click', function() {
//     document.querySelector('.input1').value = '';
//     document.querySelector('.input2').value = '';
    
// })
// const romanian = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
    // const operands = string.split(/[+\-*\/]/g)

function calculator(string) {

    const inputToSplite = string.split(' ')
    if(inputToSplite.length < 2 || inputToSplite.length > 3){
        console.log('Length error');
    }

    switch (inputToSplite[1]) {
        case '+' : 
        inputToSplite[0] + inputToSplite[2]
        break
    }

    return inputToSplite
}

console.log(calculator('2 + 3'));