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

function getAllStepNumber(n) {
    if(n == 1){
        
        return n
    } else {
        console.log(n);
        return getAllStepNumber(n - 1) 
    }
    
}

console.log(getAllStepNumber(5));
for(let i = )
