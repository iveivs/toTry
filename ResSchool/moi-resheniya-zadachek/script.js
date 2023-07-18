
//  - - - - - - - -
// РАБОТА С ФУНКЦИЯМИ
// ПРИМИТИВНЫЙ КАЛЬКУЛЯТОР
// function calc(a,b, oper) {
//     if (oper == '+') {
//         return a + b
//     } else if(oper == '-'){
//         return a - b
//     }

//     // ещё один вариант того же самого
//     // switch (oper) {
//     //     case '+':
//     //         return a + b
//     // }
// }

// console.log(calc(2,4, '+'));
//  - - - - - - - -

// const age = 16;
// const category = age > 18 ? 'Взрослый' : 'Детский'
// console.log(category);

// - - - - -

// РАБОТА С ФУНКЦИЯМИ
// function sayHello(name) {
//     if(name !== undefined) {
//         return  'Hello ' + name
//     } else {
//         return 'Hello, someone!'
//     }
// }
// console.log(sayHello('John'));
// console.log(sayHello());

// то же самое только через стрелочную функцию
// const sayHello2 = name2 => name2 !== undefined ? 'Hello ' + name2 : 'Hello, someone!'
// console.log(sayHello2('Bob'));
// console.log(sayHello2());

// - - - - - - - 

// const a = 8
// const b = 14
// let c = a > b ? a : b
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
// let arr = [1, 2, 3]
// for (let i = 0; i < arr.length; i++) {
//     arr.splice(i, 1, arr[i] * 2)
    
// }
// let newArr = arr
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
// const arr = [1,2,3]
// const arr1 = []
// for (let i = 0; i < arr.length; i++) {
//     arr1.push(arr[i] * 2)
// }
// console.log(arr);
// console.log(arr1);
//  - - - - - - - - - - - - -

// Создаём новый массив в котором значения будут увеличены на 25% от старого массива
// let arr = [1, 10, 15, -100, -23, 19, 15032]
// let newArr = arr.map(function(p) {
//     const procentP = p / 4 * 5
//     p = procentP
//     return p
// })
// console.log(arr);
// console.log(newArr);
//  - - - - - - - - - - - - -

// ПОМЕЩАЕМ ДАННЫЕ ИЗ МАССИВА В HTML

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
const names2 = ['2Bob', '2Klar', '2Petya', '2Ilya', '2Viktoriya'];
let bodyElem = document.querySelector("ul")
let bodyElem2 = document.querySelector("div")
let testElem = document.querySelector(".div-test")

// Простой вариант
testElem.innerHTML = `
                            <p>${names[0]}</p>
                    `
//  - - -                     
// Первый вариант
function render() {
    for(let i = 0; i<names.length; i++) {
        bodyElem.insertAdjacentHTML(
        'beforeend', 
        getNoteTemplate(names[i])
    )
    }
    
}
render()

function getNoteTemplate(title) {
    return `
            <li>${title}</li>
            `
}
// Второй вариант

function render2(arr) {
    for(let i = 0; i<arr.length; i++) {
        bodyElem.insertAdjacentHTML(
        'beforeend', 
        `<p> ${arr[i]}</p>`
    )
    }
    
}
render2(names2);
//  - - - - - - - - - - - - -







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
