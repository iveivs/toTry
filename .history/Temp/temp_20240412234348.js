// const multiplyNumbersFromRange = (start, finish) => {
//     let i = start;
//     let multiply = 1
//     while (i <= finish) {
//         multiply *= i
//         i += 1
//     }
//     return multiply;
// }

// console.log(multiplyNumbersFromRange(3, 5));
// - - - - - - -

// function joinNumbersFromRange(start, finish) {
//     let resultString = ''
//     let i = start
//     while(i <= finish) {
//         resultString += i
//         i ++
//     }
//     return resultString
// }

// console.log(joinNumbersFromRange(5, 9));

// - - - - - - -

// function mySubstr(someString, lengthOfString) {
//     let i = 0
//     let result = ''
//     while(i < lengthOfString) {
//         result += someString[i]
//         i++
//     }
//     return result
//     // return someString.slice(0, lengthOfString)
// }
// console.log(mySubstr('If I look back I am lost', 7))
// - - - - - - -

// function countChars(someString, charToFind) {
//     let i = 0
//     let count = 0
//     while (i < someString.length) {
//         if(charToFind === someString[i].toUpperCase() || charToFind === someString[i].toLowerCase()){
//             count ++
//         }
//         i ++
//     }
//     return count
// }

// console.log(countChars('HexlEt', 'e'));
// console.log(countChars('HexlEt', 'E')); 
// - - - - - - -

// function makeItFunny(someStr, num) {
//     let i = 0
//     let result = ''
//     while(i < someStr.length) {
//         if((i + 1) % num === 0 ) {
//             result += someStr[i].toUpperCase()
//         } else {
//             result += someStr[i]
//         }
//         i++
//     }
//     return result
// }

// console.log(makeItFunny('I never look back', 3));

function encrypt(someStr) {
    let result = ''
    for (let i = 0; i < someStr.length; i = ) {
        console.log(someStr.slice(i, i + 1));
    }
    return
}
console.log(encrypt('move'));
