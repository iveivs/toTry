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

withoutLast([1, 2, 3, 4, 5])
