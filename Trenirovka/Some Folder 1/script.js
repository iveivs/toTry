// Coding Challenge #1

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h


// const bmv = new Car(100)
// const mersedes = new Car(100)
// bmv.accelerate()
// mersedes.breake()

// class Car2 {
    
//     constructor(speed) {
//         this.speed = speed //attribute 
//     }
//     accelerate () {
//         this.speed += 10
//         console.log(this.speed);
//     }
//     breake (){
//         this.speed -= 5
//         console.log(this.speed);
//     }
//     get speedUS() {
//         return this.speed *= 1.6;
//     }

//     // Не работает с set
//     set speedUS(value) {
//         this.speed = value / 1.6
//         console.log(this.speed);
//     }
//     // setSpeedUS(value) {
//     //     this.speed = value / 1.6
//     //     console.log(this.speed);
//     // }
//     showSpeed() {
//         console.log(this.speed);
//     }
// }

// const ford = new Car2(200)
// console.log(ford.speedUS);
// ford.speedUS = 50
// console.log(ford.speedUS());


// Coding Challenge #3
/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

// class Car {
//     constructor(speed) {
//         this.speed = speed
//     }
//     accelerate () {
//         this.speed += 10
//         console.log(this.speed);
//     }
//     breake (){
//         this.speed -= 5
//         console.log(this.speed);
//     }
// }

const Car = function(speed) {
    this.speed = speed
}

// class ElectricCar extends Car {
//     constructor() {
//         super
//         Car.call(this, speed)
//     }
// }

// class Ec {
//     constructor(speed, ) {
//         Car.call(this, speed);
//     }
// }

const Ec = function (charge, speed) {
    Car.call(this, speed);
    this.charge = charge
}

Ec.prototype = Object.create(Car.prototype)

Ec.prototype.chargeBattery = function (chargeTo) {
    this.chargeTo = chargeTo;
}

const tesla = new Ec
tesla.chargeBattery(200)
console.log(tesla.chargeTo);
tesla.speed = 10
console.log(tesla.speed);
const newCar = new Car(20)
console.log(tesla.speed);