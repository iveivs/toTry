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
    const romanian = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X',
                    'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXVIX',
                    'XXXI', 'XXXII', 'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXVIX',
                    'XL', 'XLI', 'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX', 'XL',
                    ]

    const inputToSplite = string.split(' ')

    if (inputToSplite[1] === '/' && inputToSplite[2] === '0') {
        return "Zero Error"
    }
    if (inputToSplite.length < 2 || inputToSplite.length > 3) {
        return 'Length error';
    }

    if (romanian.includes(inputToSplite[0]) && romanian.includes(inputToSplite[2])) {
        console.log('romanian digits is here')
        const varA = romanian.indexOf(inputToSplite[0]) + 1
        console.log('varA =', varA);
        const varB = romanian.indexOf(inputToSplite[2]) + 1
        console.log('varB =', varB);

        let result
        switch (inputToSplite[1]) {
            case '+':
                result = +varA + +varB
                break

            case '-':
                result = +varA - +varB
                break

            case '*':
                result = +varA * +varB
                break

            case '/':
                result = Math.floor(+varA / +varB)
                break
        }
        return romanian[result -1]
    }

    let result
    switch (inputToSplite[1]) {
        case '+':
            result = +inputToSplite[0] + +inputToSplite[2]
            break

        case '-':
            result = +inputToSplite[0] - +inputToSplite[2]
            break

        case '*':
            result = +inputToSplite[0] * +inputToSplite[2]
            break

        case '/':
            result = Math.floor(+inputToSplite[0] / +inputToSplite[2])
            break
    }

    return result
}

console.log(calculator('2 + 3'));
console.log(calculator('2 + 3 + 4'));
console.log(calculator('2 * 3'));
console.log(calculator('2 - 10'));
console.log(calculator('4 - 4'));
console.log(calculator('2 / 0'));
console.log(calculator('5 / 4'));
console.log(calculator('5 / 4'));
console.log(calculator('II + V'));