function reverseWords(str) {
    // Go for it
    // const newStr = str.split('').reverse().join('')
    // const arrFrom = Array.from(str)
    const arrFromString = str.split(' ')
    // console.log(arrFrom);
    // console.log(arrFromString);
    // let newStr = ''
    let newArr = []
    for(let key of arrFromString) {
        // console.log(typeof key);
        // console.log(key.split('').reverse().join(''));
        
        // console.log(newStr);
        newArr.push(key.split('').reverse().join(''))
    }
    // console.log(typeof newStr);
    return newArr.join()
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
// reverseWords('The quick brown fox jumps over the lazy dog.')