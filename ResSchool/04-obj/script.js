const person = {
    name: 'Svetoslav',
    age: 37,
    languages: ['ru', 'en'],
    adress: {
        sity: 'Saint-Peterburg',
        street: "Nevsky"
    },
    'complex key': 'complex value',
    ['key' + 2 * 3]: 'computed value',
    greet() {
        console.log('Hello', this);
    },
    arrow: () => {
        console.log('Arrow hello', this);
    },
    info() {
        console.log('Prsone name', this.name);
    }
}

// console.log(person.adress);
// console.log(person['adress']);
// console.log(person['complex key']);
// // можем создавать отдельные ключи к объекту(это называется динамический ключ)
// const adressKey = 'adress'
// // вызов динамического ключа
// console.log(person[adressKey]);

// // изменяем объект
// person.languages.push('de')
// console.log(person.languages);

// // удаление свойства из объекта
// delete person.adress
// console.log(person);

// деструктуризация объекта
// const name = 'Petr'

// const {age, name: firstName, languages} = person

// console.log(age, age, firstName);


// итерация объекта
// for(let key in person) {
//     console.log(key);
//     console.log(person[key]); // в данной итерации могут возникнуть ошибки, и цикл может итерировать прототип
    
// }

// более правильная итерация по значениям объекта
// for(let key in person){
//     if(person.hasOwnProperty(key)) {
//         console.log(person[key])
//     }
// }

// Более продвинутый метод
// const keys = Object.keys(person)
// keys.forEach((key) => {
//     console.log(person[key]);
// })

// Или
// Object.keys(person).forEach((key) => {
//     console.log(person[key]);
// })

const logger = {
    keys() {
        console.log('Object keys', Object.keys(this));
    },
    keysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log('Key ', key)
            console.log('Value ', this[key])
        })
    }
}
// logger.keys()
// logger.keysAndValues()
// 
// const bound1 = logger.keys.bind({ a : 1, b : 42  })
// bound1()
// const bound2 = logger.keys.bind(person)
// bound2()
// const bound3 = logger.keysAndValues.bind(person)
// bound3()

// ЗАЧАСТУЮ МОЖНО УВИДЕТЬ ДРУГОЙ СПОСОБ ВЫЗОВА bind, БЕЗ ПЕРЕМЕННОЙ
// logger.keys.bind(person)();

// ЗАЧАСТУЮ ПО АНАЛОГИИ МОЖНО УВИДЕТЬ ДРУГИЕ МЕТОДЫ
// logger.keys.call(person) // в call может быть неограниченное кол-во параметров, например logger.keys.call(person, false, 'abs') 
// logger.keys.apply(person) // в apply два параметра, и второй параметр всегда массив. кот-й выполняет ту же самую функцию logger.keys.apply(person, [false])

// в bind можно передавать параметр при вызове
// bound3(false)

// КЛАССЫ И НАСЛЕДОВАНИЕ
// создаём класс от которого будем наследоваться
class Human {
    isHuman = true

    humanGreet() {
        console.log('Greet From Human');
        return 55
    }
}
// Для наследования необходимо указать от чего мы хотим наследоваться и для использования полей родителя нужно указать super() в конструкторе
class Person extends Human {
    constructor(name, age) {
        super()
        this.name = name ?? 'Undefined name' // вопросительные знаки нужны для того, чтоб что-то выводилось, если данные аргументы не будут переданы
        this.age = age ?? 'Undefined age'
    }
    sayHello() {
        console.log('Hello', this.name);
    }
}

const newPerson = new Person('Feofan')
console.log(newPerson);

const newPerson1 = new Person('Feofan', 100)
const newPerson2 = new Person('Elena', 50)
newPerson1.sayHello()
newPerson2.sayHello()

// вызываем унаследованную от Human функцию
console.log(newPerson1.humanGreet());