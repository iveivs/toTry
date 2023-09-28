// Задание #1

// Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем, возрастом и именем питомца соответственно.
// Создайте функцию, которая в параметры принимает объект человека (john или ann), и в качестве результата выводит информацию о нем в консоль:
// “Меня зовут {name}, мне {age}, у меня есть питомец {pet}”
// Создайте функцию incrementAge(), которая в параметры принимает объект человека и увеличивает ему возраст на 1.
// Выведите циклом все названия свойств и их значения, которые есть у объекта john.

const john = {
    name: 'John',
    age: 22,
    pet: 'cat'
};

const ann = {
    name: 'Ann',
    age: 24,
    pet: 'fish'
};

function getInfo(someObj) {
    return `Меня зовут ${someObj.name}, мне ${someObj.age}, у меня есть питомец ${someObj.pet} `
}
// console.log(getInfo(john));

function incrementAge(someObj) {
    someObj.age += 1
}
// incrementAge(john)
// console.log(john.age);

for(key in john) {
    // console.log(key,':', john[key]);
}
// - - - - - - - - - - - - 
// Решение с сайта
const info = ({name, age, pet}) => console.log(`Меня зовут ${name}, мне ${age}, у меня есть питомец ${pet}`);

const incrementAge2 = people => people.age++;

const display = people => {
    for(const [key, value] of Object.entries(people))
        console.log(`${key}: ${value}`);
}

// display(john);
// - - - - - - - - - - - - - - - - - - - - -  - -

// Задание #2
// Создайте функцию, которая на вход принимает массив, а на выходе возвращает сумму его элементов:
const arr = [1, 50, 20, 75, 90];

// через переменную и редьюс
const summ = arr.reduce((elem, count) => elem + count, 0)

// через стрелочную функцию
const summ3 = (array) => array.reduce((elem, count) => elem + count, 0)


// через функцию
function sum(array) {
    return arr.reduce((elem, count) => elem + count, 0)
}

// Решение с сайта
function sum2(array) {
    let sum = 0
    for(let i of array) {
        sum += i
    }
    return sum
}

// sum(arr); 
// console.log(sum(arr));
// console.log(sum2(arr));
// console.log(summ);
// console.log(summ3(arr));
// - - - - - - - - - - - - -  - - - - - - - 



// Задание #3

// Создайте пустой массив names.
// Добавьте в него 5 любых имен.
// Выведите массив в консоль.
// Уберите из начала и конца массива по 1 элементу.
// Снова выведите массив в консоль.


const names = [];

names.push('name1', 'name2', 'name3', 'name4', 'name5',)
// console.log(names);
names.pop()
names.shift()
// console.log(names);
// - - - - - - - - - - - - - - - - - -


// Задание #4

// Дан массив names. Необходимо сделать функцию, которая на основе этого массива генерирует строку c HTML.
//  Она представляет из себя список элементов (<ul>), где каждый элемент списка (<li>) содержит элемент массива.

function someRender(arr) {
    let liString = ''
    for(let i of arr) {
        
        liString += `<li>${i}</li>`
    }
    let ulString = `<ul>${liString}</ul>`
    return ulString
}


// решение с сайта
const render = arr => `<ul>${arr.map(i => `<li>${i}</li>`).join('')}</ul>`;

// console.log(render(names));
// console.log(someRender(names));
// - - - - - - - - - - - - - - - - - - - - - - -


// Задание #5

// Дан объект:
const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};

// Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль. 
const {age, favColor, height, pet, money} = obj
// console.log(age, favColor, height, pet, money);
// - - - - - - - - - - - - - - - - - - - - - - -


// Задание #6

// Даны объекты:
// Необходимо создать новый объект obj2, в котором будут все поля объекта obj, 
// но с обновленными значениями полей как у объекта updateObj. 
const obj1 = {
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
const obj3 = obj 
console.log(obj3); 
obj3.age = updateObj.age 
obj3.favColor = updateObj.favColor 
obj3.money = updateObj.money 
console.log(obj3);

// решение с сайта
const obj2 = {...obj1, ...updateObj } 
// console.log(obj2);