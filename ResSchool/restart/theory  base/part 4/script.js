// Задание #1

// Напишите функцию calculateAge(), которая принимает день рождения и возвращает количество лет.

const birthDate = new Date('1990-05-20');


function calculateAge(someDate) {
    const birthYear = someDate.getFullYear()
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const getAge = currentYear - birthYear

    return getAge
}

const age = calculateAge(birthDate);
console.log(age);
// - - - - - - - - - - - - - - - - - - - - - - -

// Задание #2

// Напишите функцию getDateDifference(), которая возвращает разницу в днях между двумя датами.

