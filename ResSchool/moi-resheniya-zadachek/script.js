
//  - - - - - - - -
// РАБОТА С ФУНКЦИЯМИ
// ПРИМИТИВНЫЙ КАЛЬКУЛЯТОР
function calc(a,b, oper) {
    if (oper == '+') {
        return a + b
    } else if(oper == '-'){
        return a - b
    }

    // ещё один вариант того же самого
    // switch (oper) {
    //     case '+':
    //         return a + b
    // }
}

// console.log(calc(2,4, '+'));
//  - - - - - - - -

const age = 16;
const category = age > 18 ? 'Взрослый' : 'Детский'
// console.log(category);

// - - - - -

// РАБОТА С ФУНКЦИЯМИ
function sayHello(name) {
    if(name !== undefined) {
        return  'Hello ' + name
    } else {
        return 'Hello, someone!'
    }
}
// console.log(sayHello('John'));
// console.log(sayHello());

// то же самое только через стрелочную функцию
const sayHello2 = name2 => name2 !== undefined ? 'Hello ' + name2 : 'Hello, someone!'
// console.log(sayHello2('Bob'));
// console.log(sayHello2());

// - - - - - - - 

const a = 8
const b = 14
let c = a > b ? a : b
// console.log(c);

// - - - - - - -

// let a = 10;
// if(a % 2 == 0) {
//     console.log(`${a} Chetnoe`);
// }


// выводим "четное нечётное"  в консоль
// let arr = [32, 21, 12, 2, 1]
// let i = 0 
// while(i < arr.length) {
//     if(arr[i] % 2 === 0) {
//         console.log('even');
//     } else {
//         console.log('odd');
//     }
//     i ++
// }

//  - - - - - - - - - - - - -
// let i = 0

// while(i < 40) {
//     if(i % 2 === 0) {
//         console.log('even');
//     } else {
//         console.log('odd');
//     }
//     i++
//     if (i % 12 === 0){
//         console.log(i ,' кратно 12');
//     }
// }
//  - - - - - - - - - - - - -


// Изменяем массив и сохраняем его в новый(но он меняет старый массив)
// один из вариантов
let arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1, arr[i] * 2)
    
}
let newArr = arr
// console.log(arr);
// console.log(newArr);
//  - - -

// ещё один вариант(но он меняет старый массив)
// let arr = [1, 2, 3]
// let newArr = []
// for(let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] = arr[i] * 3)
// }
// console.log(arr);
// console.log(newArr);

//  - - - - - - - - - - - - -

// заполняем пустой массив на основе старого(НЕ МЕНЯЯ СТАРОГО)
const arrMain = [1,2,3]
const arr1 = []
for (let i = 0; i < arr.length; i++) {
    arr1.push(arrMain[i] * 2)
}
// console.log(arrMain);
// console.log(arr1);
//  - - - - - - - - - - - - -

// Создаём новый массив в котором значения будут увеличены на 25% от старого массива
let arr5 = [1, 10, 15, -100, -23, 19, 15032]
let newArr5 = arr5.map(function(p) {
    p =  p / 4 * 5
    return p
    // тоже самое, только через стрелочную функцию
    // let newArr = arr.map((p) => p =  p / 4 * 5)
})
// console.log(arr);
// console.log(newArr);
//  - - - - - - - - - - - - -

// ПОМЕЩАЕМ ДАННЫЕ ИЗ МАССИВА В HTML

// const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
// const names2 = ['2Bob', '2Klar', '2Petya', '2Ilya', '2Viktoriya'];
// let bodyElem = document.querySelector("ul")
// let bodyElem2 = document.querySelector("div")
// let testElem = document.querySelector(".div-test")

// // Простой вариант
// testElem.innerHTML = `
//                             <p>${names[0]}</p>
//                     `
// //  - - -          
        
// // Первый вариант
// function render() {
//     for(let i = 0; i<names.length; i++) {
//         bodyElem.insertAdjacentHTML(
//         'beforeend', 
//         getNoteTemplate(names[i])
//     )
//     }
    
// }
// render()

// function getNoteTemplate(title) {
//     return `
//             <li>${title}</li>
//             `
// }

// Второй вариант
// function render2(arr) {
//     for(let i = 0; i<arr.length; i++) {
//         bodyElem.insertAdjacentHTML(
//         'beforeend', 
//         `<p> ${arr[i]}</p>`
//     )
//     }
    
// }
// render2(names2);
//  - - - - - - - - - - - - -

// ФУНКЦИИ

// function greet(name){
//     console.log('Hello - ' + name );
// }

// const greet2 = function(name) {
//     console.log('2 Hello - ' + name);
// }

// setTimeout(function(){
//     greet('A')
// }, 2500)

// - - - - - - - - - 
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval
//     } else {
//         console.log(++counter);
//     }
// }, 2000)
// setInterval(function(){
//     greet('A')
// }, 2500)
// - - - - - - - - - 


// Функция без конкретного числа аргументов
// function sumAll (...numbers){
//     // считаем сумму входящих в параметры чисел
//     // let res = 0
//     // for(let num of numbers)
//     // res += num
//     // return res

//     // ещё один вариант
//     return numbers.reduce((acc, cur) => (acc += cur), 0)
// }

// console.log(sumAll(1,2,3,4,5));
// - - - - - - - - - - - - - -

// Замыкания

// function createPerson(name) {
//     return function (lastname) {
//         console.log(name + ' ' + lastname);
//     }
// }

// const addLastName = createPerson('Max')
// addLastName('Smith')
// addLastName('Popov')
// - - - - - - - - - - - - - -


// РАБОТА С ОБЪЕКТАМИ

// const john = {
//     name: 'John',
//     age: 22,
//     pet: 'cat'
// }

// const ann = {
//     name: 'Ann',
//     age: 20,
//     pet: 'dog'
// }

// // Выводим содержимое объекта
// function getPersonInfo (persone) {
//     console.log(`Меня зовут ${persone.name}, мне ${persone.age}, у меня есть питомец ${persone.pet}`);
// }
// getPersonInfo(ann)

// // Меняем значения свойства объекта
// function incrementAge(persone) {
//     persone.age += 1
//     console.log(persone.age);
// }
// incrementAge(john)

// // Перебираем объект, и выводим ключ и значение
// for(key in john) {
//     console.log(key + ':', john[key]);
// }
// - - - - - - - - - - - - - -


// const arr = [1, 50, 20, 75, 90];

// function sumArr(array) {
//     let sum = 0
//     // for(let i = 0; i < array.length; i ++) {
//     //     sum += array[i]
//     // }
//     // через другой цикл
//     for(num of array) {
//         sum += num
//     }
//     return sum
// }
// console.log(sumArr(arr));
//  - - - - - - - - - -

// Удаление элементов из массива
// const names = ['Bob1', 'Bob2','Bob3','Bob4','Bob5',]
// names.pop()
// names.shift()
// console.log(names);
//  - - - - - - - - - -

// Деструктуризация объекта
// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };

// const {age, favColor, height, pet, money} = obj
// console.log(age);

// // ДАТА И ВРЕМЯ
// const now = new Date()

// const start = new Date(1000 * 60 * 60 * 24 * 365)

// const date = new Date(2011, 0, 1, 12, 36, 45)

// console.log(date);

// console.log(now.getFullYear());
// console.log(now.getMonth());

// now.setFullYear(2055)

// - - - - - - - - - - - - - 

// РАБОТА С ОБЪЕКТАМИ
// Даны объекты:
const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};

const updateObj = {
	age: 23,
	favColor: 'blue',
	money: 11450
};
// Необходимо создать новый объект obj2, в котором будут все поля объекта obj, 
// но с обновленными значениями полей как у объекта updateObj. 

const obj2 = obj 
console.log(obj2);
obj2.age = updateObj.age
obj2.favColor = updateObj.favColor
obj2.money = updateObj.money
console.log(obj2);

// task 1

// var a = 5;
// console.log(a);
// let b = 10;
// console.log(b);
// const c = 13;
// console.log(c);


// a = 15;
// console.log(a);
// b = 110;
// console.log(b);
// c = 113;
// console.log(c);

// - - - - - - - - - 

// task 2

// const a = 100;
// a = 20;
// console.log(a);

//  - - -

// console.log(a)
// let a = 15;
// console.log(a);

//  - - - - - 

// console.log(a);
// var a;
// a = 10;
// console.log(a);

//  - - - - - -

// console.log(10 != 10);
// console.log(10 != 8);

// const a = {};
// const b = a;
// console.log(a === b);
