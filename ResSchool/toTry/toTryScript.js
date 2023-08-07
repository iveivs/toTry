// Перебор массива с изменением его значений
let arr = ['a', 'b' ,'c']
for(let i = 1; i < arr.length +1; i++) {
    arr[i-1] = i
}
// console.log(arr);

// второй вариант
let arr1 = ['a', 'b' ,'c']
let i = 0
for(val of arr1) {
    arr.splice(i, 1, i + 1);
    i++
}
// console.log(arr1); 
//  - - - - - - - - - - - - - - - -

// Функции (поиск простого числа)

const simpleNum = 37
let flag = true
function isPrimeNumber(num) {
    for (let j = 2; j < num; j++) { 
        if (num % j == 0) {
            flag = false
        }
    }
    return flag
}
// console.log(isPrimeNumber(simpleNum));
//  - - - - - - - - - - - - - - - -

// Функции 
// Создайте функцию isPerfectNumber(), 
// которая принимает целое положительное число в параметры и возвращает true, 
// если число является совершенным, и false в противном случае.

// Примечание. Совершенное число — это число, равное сумме всех своих положительных делителей (за исключением самого числа). 
// Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.

const perfectNum = 28
const newArr = []
let summ = 0
let flag1 = false

function isPerfectNumber(num) {
    for (let j = 1; j < num; j++) {
        if (num % j == 0) {
            newArr.push(j)
            console.log(newArr);
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        summ += newArr[i]
    }
    if (perfectNum === summ) {
        flag1 = true
    }
    return flag1
}
// console.log(isPerfectNumber(perfectNum));
//  - - - - - - - - - - - - - - - -

// Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition). 
// Возвращает она цифру числа number, находящуюся на позиции digitPosition. 
// Если происходит попытка чтения числа на позиции, которой не существует (например, кол-во цифр в числе меньше,
// чем передано в digitPosition), то верните undefined.
// Примечание. Нельзя использовать приведение числа к строке.
function getNumberDigit(number, digitPosition) {
    const arr25 = []
    if(number > 10) {
        while(number > 10) {
            arr25.push(number % 10)
            number = (number - number % 10) / 10 
            if(number < 10) {
                arr25.push(number)
            }
        }
    } else {
        arr25.push(number)
    }
    arr25.reverse()
    const index = arr25.indexOf(digitPosition)
    return index
}
console.log(getNumberDigit(2239443, 4));



//  - - - - - - - - - - - - - - - -
// метод reduce
// const arr1 = [1,2,3,4]
// const count = (arr) => arr.reduce((acc, num) => acc + num, 0);
// console.log(count(arr1));
//  - - - - - - - - - - - - - - - -

// let n = 20;
// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   console.log(i) // простое число
// }

