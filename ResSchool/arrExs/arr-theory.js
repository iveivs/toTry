
// cоздали массив 
const names = ['Bob', 'Joana', "Qwerty", 'Eva']

// создали переменную с помощью которой мы будем искать нужное нам значение в массиве
const greatWoman = 'Qwerty'

// создали переменную в которую мы положим индекс искомой переменной
const indexFind = names.indexOf(greatWoman)
// console.log(indexFind);
// console.log(greatWoman);

// меняем значение искомой переменной с помощью переменной индекса
names[indexFind] = "NBVCX"
// console.log(names[indexFind]);
// console.log(names);

// НОВЫЙ метод, который позволяет не менять массив при замене одного из его значений
const greatMan = 'Bob'
const newIndexFind = names.indexOf(greatMan)
const newNames = names.with(newIndexFind, 'Bernard')
// console.log(newNames);
// console.log(names);


// обзор метода map (map трансформирует текущий массив во что-то другое)
// ШАГ 1
const capitalNames = names.map(function(name) {
    // const newName = name + '!'
    return name.toUpperCase()
})
// console.log(capitalNames);

// ШАГ 2

// // старый способ поменять одно из значений в массиве
// const capitalNames = names.map(function(name, index) {
//     if(index === 1) {
//         return 'RETURN-NAME'
//     }
//     return name
// })
// console.log(capitalNames);
// // метод includes возвращает булевое знчение после поиска нужного элемента в массиве
// console.log(names.includes('Eva')); // вернёт true
// // ещё один способ предыдущего варианта
// console.log(names.indexOf('Eva') !== -1); // вернёт true


// const people = [
//     {name:'Vlad', budget: 4200 },
//     {name:'Elena', budget: 14200 },
//     {name:'Igor', budget: 300 },
//     {name:'Kseniya', budget: 7200 },
// ]
//  ШАГ 1

// let findedPerson

// for(let person of people) {
//     if(person.budget === 7200) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson);

// специальные методы, вместо тех, которые были выше(в предыдущем коде)
/*
const findedPerson = people.find(function(person) {
    // укороченный вариант
    return person.budget === 7200
    // более длинный вариант
    // if(person.budget === 7200) {
    //     return true
    // }
})
console.log(findedPerson);
// ещё короче
// const finded = people.find((p) => p.budget === 7200)
// console.log(finded);
//  - - - - - - - - - -
*/

// // через findindex находим нужный
// const finded1 = people.findIndex(function(person) {
//     return person.budget === 7200
// })
// console.log(finded1);
// //  - - - - - - - - - -

// метод filter - всегда возвращает новый массив

//  СУММИРУЕМ БЮДЖЕТ
// let sumBudget = 0
// const filtered = people.filter(function(p) {
//     return p.budget > 5000
// })
// console.log(filtered);

// filtered.forEach(function(p) {
//     sumBudget += p.budget
// })
// console.log(sumBudget);
// //  - - - - - - - - - -

// ЕЩЁ ОДИН ВАРИАНТ
// const sumBudget = people.filter((p) => p.budget > 5000).map((p) => p.budget).reduce((acc, p) => acc + p, 0)
// console.log(sumBudget);
// //  - - - - - - - - - -
// ЕЩЁ ОДИН ВАРИАНТ

// const byBudget = (p) => p.budget > 5000
// const pickBudget = (p) => p.budget

// const sumBudget = people
// .filter(byBudget)
// .map(pickBudget)
// .reduce((acc, p) => acc + p, 0)

// console.log(sumBudget);
// //  - - - - - - - - - -

// Методы строк
// const string1 = "Whats up ?" 
// const reversed = string1.split('').toReversed().join("")
// console.log(reversed);
// //  - - - - - - - - - -