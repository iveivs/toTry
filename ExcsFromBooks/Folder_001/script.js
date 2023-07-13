'use strict'

// const shopList = []

// shopList.push('milk', 'bread', 'apples')


// shopList.splice(1, 1, 'bananas', 'eggs')

// shopList.splice(shopList.length - 1, 1)
// // console.log(shopList);
// shopList.sort();
// // console.log(shopList);

// // let milkInd = shopList.indexOf('milk');

// // console.log(milkInd);

// shopList.splice(1, 0, 'carrots', 'letucce')

// console.log(shopList);
// let shopList_2 = ['juice', 'pop']

// let newShopList = shopList.concat(shopList_2, shopList_2)
// console.log(newShopList);

// - - - - - - - - - - - - -  -

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']]
// theList.pop();
// console.log(theList);
// theList.pop();
// console.log(theList);
// theList.push('LAST')
// console.log(theList);
// theList.shift()
// console.log(theList);
// theList.unshift('ONE')
// console.log(theList);

//  - - - - - - - - - - - - - 
// let dog = {
//     dogName: 'JS',
//     wiight: 2.4,
//     color: 'Brown',
//     age: 3
// }

// dog.color = 'Black';

// let dogAge = dog['age']
// console.log(dog);
// console.log(dogAge);





// const nameArr = [ 'is kind' , 'is bad', 'is sweet' , 'is hard', 'is beautiful']

// let getName = function() {
//     return prompt("Please, input name: ")
// }

// console.log(getName());
// console.log(getName());

// function getRandomNumber() {
//     const arrLenght = nameArr.length ;
//     console.log(arrLenght);
//     let randomNum = Math.random(10);
//     console.log(randomNum);
// }

// getRandomNumber();



//  - - - - - - - - - -

// function addTwoNum(x, y) {
//     console.log(x + y);
// }

// addTwoNum('qwe', 'rty')
// addTwoNum(4, 5)
//  - - - - - - - - - -

// const a = 5
// const b = 8
// let c = a > b ? a : b
// console.log(c);
// //  - - - - -


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(getRandomInt(2, 8));

// - - - - -
// дюймы фунты, индекс массы тела

// const funt = 2.2046
// const duim = 2.54

// let duimMetr = duim / 100
// console.log(duimMetr);

// // мой рост в дюймах
// let myHigh = 174 * duimMetr
// console.log(myHigh);

// // мой вес в фунтах
// const myWeightFunt = 70 / funt
// console.log(myWeightFunt);

// let indexMass = 70 / ((174 / 100) * (174 / 100) )
// console.log(indexMass);
// - - - - - - - - 

// Практическое занятие 3.4  ( ПЗ 3.4 )
// let myCar = {
//     carName: 'Qwerty',
//     make: 'Ytrewq',
//     model: 789,
//     year: 1987,
//     color: 'red',
//     wheelsSize: 16
// }
// // меняем параметры свойств объекта
// // myCar.color = 'blue'
// // или:
// let colorVariable = 'color'
// myCar[colorVariable] = 'green'

// myCar['wheelsSize'] = 17
// console.log(myCar);
// - - - - - - -

//  ПЗ 3.5
// создаем объект с пустым массивом
// let people = {
//     friends: []
// }

// let one = {
//     name: 'Jo',
//     lastName: 'Jom',
//     id: 1
// }

// let two = {
//     name: 'Bo',
//     lastName: 'Bom',
//     id: 2
// }

// let three = {
//     name: 'Do',
//     lastName: 'Dom',
//     id: 3
// }
// // добавляем в пустой массив объекта people другие объекты 
// people.friends.push(one, two, three)
// console.log(people);
// - - - - - - - - - - - - -

// Каталог продукции компании
// const listProduct = []

// const prod1 = {
//     name: 'Q',
//     model: 1,
//     cost: 99,
//     quantity: 9
// }

// const prod2 = {
//     name: 'W',
//     model: 2,
//     cost: 88,
//     quantity: 8
// }

// const prod3 = {
//     name: 'E',
//     model: 3,
//     cost: 77,
//     quantity: 7
// }
// // добавляем объекты в массив
// listProduct.push(prod1, prod2, prod3)
// // обращаемся к определённому элементу(объекты) в массиве
// console.log(listProduct[0]);
//  - - - - - - - - - - -

// ПЗ 4.2

// let userAgeInput = Number(prompt('What is your age?'))
// console.log(typeof userAgeInput);
// let message = ''
// if(userAgeInput != '') {
//     if(userAgeInput >= 19 && userAgeInput < 21) {
//         message = "not By - ENTER"
//         alert(message)
//     } else if(userAgeInput <= 21) {
//         message = "not ENTER not BY"
//         alert(message)
//     } else if(userAgeInput >=21) {
//         message = 'ENTER - BY'
//         alert(message)
//     }
// }
// - - - - - - - - - - - - - 

// ПЗ 4.4

// let randomNumber = Math.random() * 6
// console.log(randomNumber);
// randomNumber = Math.floor(randomNumber)
// console.log(randomNumber);

// let answer = 'something went wromg'
// let question = prompt('Ask me anything')

// switch(randomNumber) {
//     case 0:
//         answer = 'It will work out';
//         break;
//     case 1:
//         answer = 'Maybe, maybe not';
//         break;
//     case 2:
//         answer = 'Probably not';
//         break;
//     case 3:
//         answer = 'Highly likely';
//         break;
//     default:
//         answer = 'I dont know about that'
// }

// let output = "You asked me " + question + ". I think that " + answer;
// console.log(alert(output));

// - - - - - - - - -
// то же самое, с переведенными вопросами
// let randomNumber = Math.random() * 11;
// randomNumber = Math.floor(randomNumber)
// console.log(randomNumber);

// let otvet = 'что-то пошло не так'
// let vopros = prompt('Задайте вопрос')

// if(vopros != '') {
//     switch(randomNumber) {
//         case 0:
//             otvet = 'Это сработает'
//             break
//         case 1:
//             otvet = 'Может да, может нет'
//             break
//         case 2:
//             otvet = 'Возможно нет'
//             break
//         case 3:
//             otvet = 'Очень вероятно'
//             break
//         default:                        
//             otvet = 'Очень вероятно'
//     } 
// }

// let output = "Вы спросили меня " + vopros + ". Я думаю что " + otvet;
// console.log(alert(output))
//  - - - - - - - - 

// ПЗ 4.5

// let prize = Number(prompt('введите число с 0 до 10'))

// let output = 'My Selection '

// switch(prize) {
//     case 0: 
//         output += 'Gold'
//         break
//     case 1: 
//         output += 'Coin'
//         break
//     case 2: 
//         output += 'Box'
//         break
//     default:
//         output += 'Sorry try again'
// }
// console.log(output);
// - - - - - - - -

// Rock Papper Scissors

// const myArr = ['Камень', 'Бумага', 'Ножницы']

// let player = Math.floor(Math.random() * 3)
// let computer = Math.floor(Math.random() * 3)

// let message = 'Игрок ' +  myArr[player] + ' - Комп ' + myArr[computer]

// console.log(message);

// if(player === computer) {
//     message += ' - это ничья'
// } else if (player > computer) {
//     if(computer == 0 && player ==2) {
//         message += ' Комп выиграл'
//     } else {
//         message += ' Игрок выиграл'
//     }
// } else {
//     if(computer == 2 && player == 0) {
//         message += ' Игрок выиграл'
//     } else {
//         message += '  Комп выиграл'
//     }
// }
// console.log(message);

//  - - - - -

// Совпадение случайных чисел c заданными числами
let i = 0
let schetchik = 0
let a1 = Math.round(Math.random() * 36)
let b1 = Math.round(Math.random() * 36)
let c1 = Math.round(Math.random() * 36)
let d1 = Math.round(Math.random() * 36)
let e1 = Math.round(Math.random() * 36)
console.log(a1, b1, c1, d1, e1);

while(i < 1000000) {
    let a = Math.floor(Math.random() * 36 - 1);
    let b = Math.floor(Math.random() * 36);
    let c = Math.floor(Math.random() * 36 - 5);
    let d = Math.floor(Math.random() * 36);
    let e = Math.floor(Math.random() * 36 - 2);
    // console.log('Проверка 1 - ' + a,b,c,d,e);
    if((a === b) || (a === c) || (a === d) || (a === e)){
        a = Math.floor(Math.random() * 36);
    }
    if((b === a) || (b === c) || (b === d) || (b === e)){
        b = Math.floor(Math.random() * 36);
    }
    if((c === a) || (c === b) || (c === d) || (c === e)){
        c = Math.floor(Math.random() * 36);
    }
    if((d === a) || (d === b) || (d === c) || (d === e)){
        d = Math.floor(Math.random() * 36);
    }
    if((e === a) || (e === b) || (e === c) || (e === d)){
        e = Math.floor(Math.random() * 36);
    }
    // console.log('Проверка 2 - ' + a,b,c,d,e);
    if(((a === b) || (a === c) || (a === d) || (a === e)) && ((b === a) || (b === c) || (b === d) || (b === e)) && ((c === a) || (c === b) || (c === d) || (c === e)) && ((d === a) || (d === b) || (d === c) || (d === e)) && ((e === a) || (e === b) || (e === c) || (e === d))) {
        a = Math.floor(Math.random() * 36);
        b = Math.floor(Math.random() * 36);
        c = Math.floor(Math.random() * 36);
        d = Math.floor(Math.random() * 36);
        e = Math.floor(Math.random() * 36);
    }
    // console.log('Проверка 3 - ' + a,b,c,d,e);
    

    // НЕ РАБОТАЕТ
    //  - - - - - - - - - - - - - - - - - - - - -
    // while( a != b && a != c && a != d && a != e && b != c && b != d && b != e && c != a && c != d && c != e && d != e) {
    //     a = Math.floor(Math.random() * 36);
    //     b = Math.floor(Math.random() * 36);
    //     c = Math.floor(Math.random() * 36);
    //     d = Math.floor(Math.random() * 36);
    //     e = Math.floor(Math.random() * 36);
    // }
    //  - - - - - - - - - - - - - - - - - - - - -
    if((a === a1 || a === b1 || a === c1 || a === d1 || a === e1 ) && (b === a1 || b === b1 || b === c1 || b === d1 || b === e1) && (c === a1 || c === b1 || c === c1 || c === d1 || c === e1) && (d === a1 || d === b1 || d === c1 || d === d1 || d === d1 ) && (e === a1 || e === b1 || e === c1 || e === d1 || e === e1)) {
        // console.log(schetchik);
        console.log('Урра !!! ', a, b, c, d, e);
        break
    }
    schetchik ++
    i++
}
console.log('Попыток ' + schetchik);
//  - - - - - - - -