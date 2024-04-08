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

        newArr.push(key.split('').reverse().join(''))
    }
    return newArr.join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
