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
    const romanian = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',
        'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX',
        'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXVIX',
        'XXX', 'XXXI', 'XXXII', 'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXVIX',
        'XL', 'XLI', 'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX',
        'L', 'LI', 'LII', 'LIII', 'LIV', 'LV', 'LVI', 'LVII', 'LVIII', 'LIX',
        'LX', 'LXI', 'LXII', 'LXIII', 'LXIV', 'LXV', 'LXVI', 'LXVII', 'LXVIII', 'LXIX',
        'LXX', 'LXXI', 'LXXII', 'LXXIII', 'LXXIV', 'LXXV', 'LXXVI', 'LXXVII', 'LXXVIII', 'LXXIX',
        'LXXX', 'LXXXI', 'LXXXII', 'LXXXIII', 'LXXXIV', 'LXXXV', 'LXXXVI', 'LXXXVII', 'LXXXVIII', 'LXXXIX',
        'XC', 'XCI', 'XCII', 'XCIII', 'XCIV', 'XCV', 'XCVI', 'XCVII', 'XCVIII', 'XCIX',
        'C'
    ]

    const inputToSplite = string.split(' ')
    if(string.length < 5 || string === '' ){
        console.log('string length', string.length);
        return "Некорректные данные 1"
    }
    if (inputToSplite[1] === '/' && inputToSplite[2] === '0') {
        return "Некорректные данные 2"
    }
    if (inputToSplite.length < 2 || inputToSplite.length > 3) {
        return 'Некорректные данные 3';
    }
    if (inputToSplite[0] > 10 || inputToSplite[2] > 10) {
        return 'Некорректные данные 4';
    }

    if (romanian.includes(inputToSplite[0]) && romanian.includes(inputToSplite[2])) {
        const varA = romanian.indexOf(inputToSplite[0]) + 1
        const varB = romanian.indexOf(inputToSplite[2]) + 1

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
        return result <= 0 ? '' : String(romanian[result - 1])
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
        default:
            return 'Некорректные данные 5'
    }
    return Number.isNaN(result) ? 'Некорректные данные 6' : String(result)
}

console.log(calculator('2 + 3'));
console.log(calculator('2 - 3'));
console.log(calculator('2 + 3 + 4'));
console.log(calculator('2 * 3'));
console.log(calculator('2 - 10'));
console.log(calculator('4 - 4'));
console.log(calculator('2 / 0'));
console.log(calculator('5 / 4'));
console.log(calculator('5 / 4'));
console.log(calculator('X * X'));
console.log(calculator('5 * 11'));
console.log(calculator('15 - 1'));
console.log(calculator('V - VI'));
console.log(calculator('V - IV'));
console.log(calculator('I - I'));
console.log(calculator('1 - I'));
console.log(calculator('2 / 4'));
console.log(calculator('    '));
console.log(calculator(' '));

