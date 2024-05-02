function convertText(word) {
    if(word == ' ') {
        return ' '
    }
    // return word[0] === word[0].toUpperCase() ? word : word.split('').reverse().join('');
    let reverse = reverse(word)
    return word[0] === word[0].toUpperCase() ? word : reverse
}

console.log(convertText('hello'));
console.log(convertText(' '));
console.log(convertText('Hello'));
