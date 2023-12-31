// Задание #1

// Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.
// Примечание. Простые числа — это числа, которые больше 1 и не имеют делителей, кроме 1 и самого себя.

function isPrimeNumber(number) {
    let flag = true
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            flag = false
        }
    }
    return flag
}
// console.log(isPrimeNumber(7));
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -  

// Задание #2

// Напишите функцию func(), которая принимает num, min, max:

// Если число num < min, то функция возвращает min ** 2.
// Если число num > max, функция возвращает max ** 2.
// Если число num < max - (max - min) / 2, то функция возвращает num ** 2
// Иначе возвращает округленное вниз значение num.

function func(num, min, max) {
    if(num < min) {
        return min ** 2
    }
    if(num > max) {
        return max ** 2
    }
    if(num < max - (max - min) / 2) {
        return num ** 2
    }else {
        return Math.floor(num) 
    }
}

// console.log(func(3, 1, 10)); // 9
// console.log(func(15, 1, 10)); // 100
// console.log(func(5, 1, 10)); // 25
// console.log(func(8.5, 1, 10)); // 8
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -  


// Задание #3

// Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры и возвращает true, 
// если число является совершенным, и false в противном случае.

// Примечание. Совершенное число — это число, равное сумме всех своих положительных делителей (за исключением самого числа). 
// Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.
function isPerfectNumber(num) {
    const newArr = []
    let summ = 0
    let flag1 = false

    // ищем положительные делители с помощью цикла
    for (let j = 1; j < num; j++) {
        if (num % j === 0) {
            // отправляем из в массив
            newArr.push(j)
            console.log(newArr);
        }
    }
    // считаем сумму элементов массива
    for (let i = 0; i < newArr.length; i++) {
        summ += newArr[i]
    }
    // сравниваем с принимаемым числом
    if (num === summ) {
        flag1 = true
    }
    return flag1
}

//   console.log(isPerfectNumber(6));   // true
//   console.log(isPerfectNumber(28));  // true
//   console.log(isPerfectNumber(12));  // false
//   console.log(isPerfectNumber(16));  // false
// - - - - - - - - - - - - - - - - - - - - - - - - - - - -  


// Задание #4

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
    // Возвращаем значение позиции числа
    const getNumber = arr25[digitPosition]
    return getNumber
}
console.log(getNumberDigit(123, 0), getNumberDigit(123, 1), getNumberDigit(123, 2), getNumberDigit(1, 2));
// getNumberDigit(123, 0) // 1
// getNumberDigit(123, 1) // 2
// getNumberDigit(123, 2) // 3
// getNumberDigit(1, 2) // undefined

// Задание #4 (ВАРИАЦИЯ)
// Возвращает индекс заданного числа

function getIndex(number, digit) {
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
    const index = arr25.indexOf(digit)
    return index
}

// console.log(getIndex(197, 7));

// const a1 = 8765
// const a2 = a1.indexOf(6)
// console.log(a2);


