// Задание #1

// Дан объект машины. 

const car = {
    name: 'Hendai Solaris',
    type: 'sedan',
    maxSpeed: '320',
    color: 'red',
}

// Необходимо написать написать функцию, которая принимает объект машины и возвращает строку с HTML,
// заполненную значениями переданного объекта. 

function fillHTML(obj) {
    const someString = `
    <article>
    <div>
        <h2>${obj.name}</h2>
        <span>${obj.type}</span>
    </div>
    <div>
        <span>Maximum speed:</span>
        <span>${obj.maxSpeed}</span>
    </div>      
    <div>
        <span>Color:</span>
        <span>${obj.color}</span>
    </div>
    </article>
    `
    return someString
}
// console.log(fillHTML(car));
// - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Задание #2

// Необходимо написать функцию countWords(), которая принимает предложение и подсчитывает количество слов в нем.

const sentence = "Hello, how are you?";

function countWords(someString) {
    // Первый вариант
    // const newString = sentence.split(' ') 
    // return newString.length

    // Второй вариант
    someString = someString.split(' ') 
    return someString.length
}

// console.log(countWords(sentence)); // 4
// - - - - - - - - - - - - - - - - - - - - - - - - - - -


// Задание #3

// Необходимо написать функцию getInitials(), 
// которая принимает полное имя в виде строки (например, “John Doe”) и возвращает инициалы в формате “J. D.”.

const fullName = "John Doe";
const initials = getInitials(fullName);

// Решение через строку
function getInitials(someString) {
    someString = someString.split(' ')
    let tempStr = ''

    for(word of someString) {
        tempStr += word[0] + '.' + ' '
    }
    return tempStr
}

// console.log(initials); // "J. D."
// - - -

// Второе решение(через массив)
function getInitials(someString) {
    someString = someString.split(' ')
    let tempArr = []

    for(word of someString) {
        let concat = word[0] + '.'
        tempArr.push(concat)
    }
    const result = tempArr.join(' ')
    result.split(' ')
    return result
}

// console.log(initials); // "J. D."
// - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Задание #4

// Необходимо написать функцию generateGoogleString(), 
// которая принимает число и возвращает сроку ”Google” с указанным количеством букв “o”. 
// При этом минимальное количество букв “о” равно 2.



function generateGoogleString(num) {
    let someString = ''
    let letterO = 'o'
    if(num >2) {
        someString = `G${letterO.repeat(num)}gle`
    }
    else {
        someString = 'Google'
    }
    return someString
}

// console.log(generateGoogleString(4)); // Goooogle
// console.log(generateGoogleString(0)); // Google
// console.log(generateGoogleString(-2)); // Google
// - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Задание #5

// Реализуйте функцию countVowels(), которая подсчитывает количество гласных букв (латинских и кириллических) в переданной строке. 

const str = "Hello, Привет!";


function countVowels(someStr) {
    const kirilicVowels = ['а', 'и', 'е']
    const latinVowels = ['e','o','a',]
    let count = 0
    for(let char of someStr.toLowerCase()) {
        if(kirilicVowels.includes(char) || latinVowels.includes(char)) {
            count++
        }
    }
    return count
}

// console.log(countVowels(str)); // 4

// вариант через классический цикл
function count(str) {
    const arr = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
    let total = 0;

    const string = str.toLowerCase().split("");

    for (let i = 0; i < string.length; i++) {
        const charts = string[i];

        if (arr.includes(charts)) {
            total += 1;
        }
    }

    return total;
}

console.log(count("Привет как дела ?"));

// Второй вариант на редюсе
function grab(str) {
    const arr = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
    const string = str.toLowerCase().split("");

    return string.reduce((acc, current) => {
        if (arr.includes(current)) {
            acc += 1;
        }
        return acc;
    }, 0);
}

// grab("Привет как дела ?");