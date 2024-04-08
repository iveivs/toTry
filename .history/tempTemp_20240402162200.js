function reverseWords(str) {
    // Go for it
    // const newStr = str.split('').reverse().join('')
    // const arrFrom = Array.from(str)
    const arrFromString = str.split(' ')
    // console.log(arrFrom);
    // console.log(arrFromString);
    const newArr = []
    for(let key of arrFromString) {
        console.log();
        newArr.push(key)
    }
    return newArr
}

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
reverseWords('The quick brown fox jumps over the lazy dog.')