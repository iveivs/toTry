// function pow(x, n) {
//     let result = 1;

//     // умножаем result на x n раз в цикле
//     for (let i = 0; i < n; i++) {
//         result *= x;
//         console.log(result);
//     }

//     return result;
// }

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 3));
