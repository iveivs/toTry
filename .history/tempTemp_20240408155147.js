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
// function cookPancakes(n, m) {
//     //   type solution here
//     if(n <= m ) {
//         return 2
//     }
//     res = m / n 
// }
// console.log(cookPancakes(2, 6));
// - - - - - -

// const text = 'When you play a game of thrones you win or you die.';
// console.log(text.slice(5, 13).replace('you', 'someone').length);

const truncate = (text, length) => {
    // BEGIN (write your solution here)

    return text.slice(0, length)
    // END
};
console.log(truncate);
