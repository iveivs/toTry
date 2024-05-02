// function reverseWords(str) {
//     const arrFromString = str.split(' ')
//     let newArr = []
//     for(let key of arrFromString) {
//         newArr.push(key.split('').reverse().join(''))
//     }
//     return newArr.join(' ')
// }

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
// console.log(window.location);
// console.log(window.location.href);
// console.log(window.location.pathname);
// console.log(screen.width);
// console.log(screen.height);
// console.log(-8 / -4);
// - - - - - - - 
function cookPancakes(totalpancakeQuantity, m) {
    //   type solution here
    if(totalpancakeQuantity <= m ) {
        return 2
    } else if(totalpancakeQuantity - m === 1) {

    } else if(totalpancakeQuantity % m >= 0){
        let totalTime = totalpancakeQuantity / m * 2
        if(totalTime - Math.floor(totalTime) !== 0){
            return Math.floor(totalTime) + 2
        }
        return totalTime
    }
}
// console.log(cookPancakes(2, 6));
console.log(cookPancakes(6, 3));
// - - - - - -

// const text = 'When you play a game of thrones you win or you die.';
// console.log(text.slice(5, 13).replace('you', 'someone').length);
// - - - - -

// const truncate = (text, length) => {
//     return `${text.slice(0, length)}...`
// };

// console.log(truncate('sadadad', 2));
// - - - - - -

// function getHiddenCard(cardNumber, symbolQuantity = 4) {

//     return '*'.repeat(symbolQuantity) + cardNumber.slice(12, 16)
// }
// // END

// console.log(getHiddenCard('1234123412340001'));

// - - - - - -
// const capitalize = (str) => {
//     console.log(str.length);
//     return str.slice(0,1).toUpperCase() + str.slice(1, str.length) 
// }

// console.log(capitalize('hello'));
// console.log(capitalize('good buy'));
// - - - - - -

// const isInternationalPhone = (phoneNumber) => phoneNumber[0] === '+' ? true : false
// console.log(isInternationalPhone('+89127319871293'));

// - - - - - 
// function isLeapYear(year) {
//     return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0 ) ? true : false
// }
// console.log(isLeapYear(2018));
// console.log(isLeapYear(2017));
// console.log(isLeapYear(2016));
// - - - - - -
// let somenName = false
// const value = somenName || ''
// console.log(typeof value);

// let somenName2 = true
// const value2 = somenName2 && '12'
// console.log(value2);
// - - - - -

// const someName = 'Hexlet';

// const getLetter = (str, position) => {
//     if(str.length >= position && position !== 0){
//         return str[position - 1]
//     } else {
//         return ''
//     }
// }

// console.log(getLetter(someName, 11));

// console.log(getLetter(someName, 0));
// - - - - - - - -

// function cookPancakes(totalpancakeQuantity, m) {
//     //   type solution here
//     if(totalpancakeQuantity <= m ) {
//         return 2
//     } else if(totalpancakeQuantity % m >= 0){
//         let totalTime = totalpancakeQuantity / m * 2
//         if(totalTime - Math.floor(totalTime) !== 0){
//             return Math.floor(totalTime) + 2
//         }
//         return totalTime
//     }
// }
// // console.log(cookPancakes(2, 6));
// console.log(cookPancakes(6, 3));