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
// console.log(age); // 33
// - - - - - - - - - - - - - - - - - - - - - - -


// Задание #2

// Напишите функцию getDateDifference(), которая возвращает разницу в днях между двумя датами.

const date1 = new Date('2027-06-01');
const date2 = new Date('2027-06-10');
function getDateDifference(someDate1, someDate2) {
    const result = (+someDate2 - +someDate1) / 1000 / 60 / 60 / 24
    return result
}
const difference = getDateDifference(date1, date2);
// console.log(difference); // 9
// - - - - - - - - - - - - - - - - - - - - - - -


// Задание #3

// Напишите функцию getTimeUntilDate(date), которая возвращает объект с информацией о том, 
// сколько времени осталось от текущей даты до переданной. 

const targetDate = new Date('2027-12-31T23:59:59');

function getTimeUntilDate(someDate){
    console.log('Будущая дата - someDate ', +someDate);

    const currentDate = new Date()
    console.log('Текущая дата - currentDate ', +currentDate);

    let deference = someDate - currentDate
    console.log('Разница между датами в милисикундах - deference', deference );

    let days = Math.floor(deference / 1000 / 60 / 60 / 24)
    let daysInMili = days * 1000 * 60 * 60 * 24

    let defWithDays = deference - daysInMili
    console.log('Разница с учётов вычета дней, для подсчёта часов', defWithDays);

    let inHours = Math.floor(defWithDays / 1000 / 60 / 60)
    let hoursInMili = inHours * 1000 * 60 * 60

    let defWithHours = defWithDays - hoursInMili
    console.log('Разница с учётов вычета дней, для подсчёта минут', defWithHours);

    let inMinutes = Math.floor(defWithHours / 1000 / 60)

    
    const dateObject = {
        days: days,
        hours: inHours,
        minutes: inMinutes
    }
    return dateObject
}
const timeUntilTargetDate = getTimeUntilDate(targetDate);
console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }

