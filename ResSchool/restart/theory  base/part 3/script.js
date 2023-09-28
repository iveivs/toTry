// Задание #1

// Напишите функцию sumNumbers(), которая принимает произвольное количество чисел через запятую и возвращает их сумму.

const result2 = sumNumbers(10, 20, 30);
const result1 = sumNumbers(1, 2, 3, 4, 5);


function sumNumbers(...someArguments) {
    let result = 0
    for(let element of someArguments) {
        result += element
    }
    return result
}

// через reduce
const sumNumbers2 = (...args) => {
    let temp = args.reduce((acm, current) => acm += current, 0)
    return temp
}
// иницилизаруем переменную(соответственно вызываем) после написания самой функции
const result3 = sumNumbers2(2, 3, 5)
// console.log(result1); // 15
// console.log(result2); // 60
// console.log(result3); // 10

// Решение с сайта
const sumNumbers3 = (...nums) => 
    nums.reduce((a, b) => a + b, 0);
// - - - - - - - - - - - - - - - - - - - - - - -


// Задание #2

// Напишите функцию findMaxValue(), которая принимает массив чисел и находит максимальное значение. 
// Если массив пустой, то возвращается значение undefined.
const numbers1 = [1, 2, 3, 4, 5];
const max1 = findMaxValue(numbers1);

function findMaxValue(array) {
    let max = 0
    for(let num of array) {
        if (num > max) {
            max = num
        }
    }
    return max
}
// console.log(max1); // 5

const numbers2 = [10, 20, 5, 30, 15];
const max2 = findMaxValue(numbers2);
// console.log(max2); // 30

// короткое решение
const shortMax = Math.max.apply(null, numbers1)
// console.log(shortMax);

const emptyArray = [];
const maxEmpty = findMaxValue(emptyArray);
// console.log(maxEmpty); // undefined

// Решение с сайта
const findMaxValue2 = (nums) => 
    nums.reduce((a, b) => Math.max(a, b), nums[0]);
// - - - - - - - - - - - - - - - - - - - - - - -

// Задание #3

// Напишите функцию calculateAverage(), которая принимает массив чисел и вычисляет их среднее арифметическое. 
// Если массив пустой, то возвращается 0.

const someNumbers1 = [1, 2, 3, 4, 5];

function calculateAverage(arr) {
    if(arr.length === 0) {
        return 0
    }
    let summ = 0
    for(let elem of arr) {
        summ += elem
    }
    const result = summ / arr.length
    return result
}

const calculateAverage2 = (arr) => {
    if(arr.length === 0) {
        return 0
    }
    let sumOfArr = arr.reduce( (acm, current) => {
        return acm += current
    }, 0) 
    return sumOfArr / arr.length
}

// console.log(calculateAverage(someNumbers1)); // 3
// console.log(calculateAverage2(someNumbers1)); // 3

const someNumbers2 = [10, 20, 30, 40, 50];
// console.log(calculateAverage(someNumbers2)); // 30
// console.log(calculateAverage2(someNumbers2)); // 30

const someEmptyArray = [];
// console.log(calculateAverage(someEmptyArray)); // 0
// console.log(calculateAverage2(someEmptyArray)); // 0

// Решение с сайта
const calculateAverage = (nums) =>
    nums.length ? nums.reduce((a, b) => a + b, 0) / nums.length : 0;
// - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Задание #4

// Напишите функцию isPalindrome(), которая принимает строку и возвращает true, если она является палиндромом, иначе — false. 
// Примечание. Палиндром — строка, которая читается одинаково слева направо и справа налево. 

function isPalindrome(someString) {
    let flag = false
    let splitedString = someString.split('')

    let reversedArr = someString.split('').reverse()

    for(let i = 0; i < splitedString.length; i++) {
        if(splitedString[i] === reversedArr[i]) {
            flag = true
        } else {
            flag = false
        }
    }
    return flag
}
// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('radar')); // true
// console.log(isPalindrome('hello')); // false

// Решение с сайта
const isPalindrome = (str) => 
    str.toLowerCase() === str.split('').reverse().join('');

// - - -
// второй вариант
function isPalindrome2(str) {
    const len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - -


// Задание #5

// Напишите функцию removeDuplicates(), которая принимает массив и возвращает новый массив без дубликатов. 

const num1 = [1, 2, 3, 3, 4, 5, 5];
    function removeDuplicates(someArr) {
        const uniqArray = [...new Set(someArr)]
        return uniqArray
    }
// console.log(removeDuplicates(num1));  // [1, 2, 3, 4, 5]

const num2 = [10, 20, 30, 30, 40, 40, 50];
// console.log(removeDuplicates(num2));  // [10, 20, 30, 40, 50]

const emptyArr = [];
// console.log(removeDuplicates(emptyArr));  // []


// Другие решения
const array = ['Bob', 'Max', 'Anna', 'Max', 'Piter', 'Anna']


// вариант 1
const uniqArray = Array.from(new Set(array))
// console.log(uniqArray);


// вариант 1.2
const removeDuplicates = arr => 
	new Array(...new Set(arr));

// вариант 2
const uniqArray2 = array.filter((item, index) => {
    // console.log(array.indexOf(item));
    return index === array.indexOf(item)
})
// console.log(uniqArray2);

// вариант 2.2
const removeDuplicates = arr => 
    array.filter((value, index) => array.indexOf(value) === index);


// вариант 3
const uniqArray3 = array.reduce((uniq, item) => {
    return uniq.includes(item) ? uniq : [...uniq, item]
}, [])
// console.log(uniqArray3);



// - - - - - - - - - - - - - - - - - - - - - - - - - - -


// Задание #6

// Создайте функцию createCounter(), которая принимает начальное значение и возвращает три функции:

// inc() — увеличивает значение на 1;
// dec() — уменьшает значение на 1;
// get() — возвращает текущее значение.

// Пример использования функции:
function createCounter(value) {
	function createCounter(value) {
        const inc = () => value++;
        const dec = () => value--;
        const get = () => value;
    
        return { inc, dec, get };
    }
}

const { inc, dec, get } = createCounter(5);
// console.log(get()); // 5
// inc();
// inc();
// inc();
// dec();
// console.log(get()); // 7