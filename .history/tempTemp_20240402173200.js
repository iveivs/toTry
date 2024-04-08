// function reverseWords(str) {
//     const arrFromString = str.split(' ')
//     let newArr = []
//     for(let key of arrFromString) {
//         newArr.push(key.split('').reverse().join(''))
//     }
//     return newArr.join(' ')
// }

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))

function withoutLast(arr) {
    // Fix it
    arr.pop(); // removes the last element
    return arr;
}

console.log(withoutLast([1, 2, 3, 4, 5]));
console.log(withoutLast([ 79, 73, 96, 14, 96, 83, 15, 59, 78, 57, 14, 19, 55 ]));

 
