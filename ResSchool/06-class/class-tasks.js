// Задачи

// Создайте класс Circle, который имеет поле radius, а также метод getArea(), 
// высчитывающий площадь круга и округляющий её до двух знаков после запятой. 
// Сделайте так, чтобы код ниже работал:
// const circle = new Circle(5);
// console.log(circle.getArea()); // "78.54"

class Circle1 {
    constructor(radius) {
        this.radius = radius
    }
    getArea() {
        let area = 3.14 * (this.radius ** 2)
        return area
    }
}
const circle = new Circle1(5);

// console.log(circle.radius);
// console.log(circle.getArea())
//  - - - - - - - - - - - - - - - - - - - - - - - - -

// Реализуйте класс Product, который имеет поля name и price. Т
// акже он имеет метод priceWithDiscount(), который возвращает обновленную цену с учетом переданной скидки (в процентах). 
// Метод не изменяет само значение price в объекте, а только выводит обновленное.  

// Сделайте так, чтобы код ниже работал:
// const product = new Product("Phone", 1000);
// console.log(product.priceWithDiscount(10)); // 900
// console.log(product.priceWithDiscount(20)); // 800

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    priceWithDiscount(procent) {
        const newPrice = this.price * ((100 - procent) / 100)
        console.log(newPrice);
        return newPrice
    }
}

const product = new Product("Phone", 1000);
console.log(product.priceWithDiscount(10));
// console.log(product);
// //  - - - - - - - - - - - - - - - - - - - - - - - -

// Реализуйте класс Person, который имеет поле friends (изначально пустой массив). Также он имеет методы:
// addFriend() — принимает имя нового друга и добавляет его в массив friends;
// showFriends() — выводит в консоль строку со всеми друзьями через запятую.
// Сделайте так, чтобы код ниже работал:

// const person = new Person();
// person.addFriend("Иван");
// person.addFriend("Сергей");
// person.addFriend("Игорь");
// person.showFriends(); // Иван, Сергей, Игорь

class Person {
    friends = []
    addFriend(name) {
        this.friends.push(name)
    }
    showFriends() {
        // let str = ''
        // for(let key of this.friends) {
        //     str += key + ', '
        // }
        // console.log(str);

        let str2 = this.friends.join(', ')
        return str2
    }
}
const person = new Person();
person.addFriend("Иван");
person.addFriend("Сергей");
person.addFriend("Игорь");
person.showFriends(); // Иван, Сергей, Игорь

console.log(person);
console.log(person.showFriends());

//  - - - - - - - - - - - - - - - - - - - - - - - -

// 1. Создайте класс Animal с полями name, favoriteFood, а также методами:

// makeSound() — вывести звук животного в консоль;
// sayName() — вывести имя животного в консоль;
// sayInfo() — вывести любимое блюдо животного в консоль.
// 2. Создайте еще 2 класса, которые будут наследоваться от класса Animal — Cat, Dog. 
// Переопределите для них метод makeSound(), чтобы он всегда возвращал соответствующий звук животного. 

// 3. Сделайте так, чтобы код ниже работал:

// const dog = new Dog('Rex', 'Meat');
// const cat = new Cat('Barsik', 'Fish');

// cat.makeSound(); // Meow
// dog.makeSound(); // Gav!

// dog.sayName(); // My name is Rex
// cat.sayName(); // My name is Barsik

// dog.sayInfo(); // Rex's favorite food is Meat
// cat.sayInfo(); // Barsik's favorite food is Fish

class Animal {
    constructor(name, favoriteFood) {
        this.name = name
        this.favoriteFood = favoriteFood
    }
    makeSound() {
        
    }
}
