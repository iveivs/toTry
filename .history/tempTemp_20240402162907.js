function reverseWords(str) {
    // Go for it
    // const newStr = str.split('').reverse().join('')
    // const arrFrom = Array.from(str)
    const arrFromString = str.split(' ')
    // console.log(arrFrom);
    // console.log(arrFromString);
    let newStr = ''
    for(let key of arrFromString) {
        // console.log(typeof key);
        // console.log(key.split('').reverse().join(''));
        newStr += key.split('').reverse().join('') + ' '
        // console.log(newStr);
    }
    // console.log(newStr);
    return newStr
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
// reverseWords('The quick brown fox jumps over the lazy dog.')