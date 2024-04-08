// function pow(x, n) {
//     let result = 1;

//     // умножаем result на x n раз в цикле
//     for (let i = 0; i < n; i++) {
//         result *= x;
//         console.log(result);
//     }

//     return result;
// }

// function pow(x, n) {
//     if (n == 1) {
//         return x;
//     } else {
//         // console.log(x);
//         return x * pow(x, n - 1);
//     }

// }

// console.log(pow(3, 4));

// console.log(getAllStepNumber(5));

function generateNumberString(n) {
    // Базовый случай: если n равно 1, возвращаем строку '1'
    if (n === 1) {
        return '1';
    } else {
        // Рекурсивный случай: генерируем строку для n-1 и добавляем n в конец, разделяя пробелом
        return generateNumberString(n - 1) + ' ' + n;
    }
}

// Пример использования
console.log(generateNumberString(5)); 