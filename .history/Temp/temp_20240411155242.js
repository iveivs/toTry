function convertText(word) {
    if(word == ' ') {
        return ' '
    }
    return word[0] === word[0].toUpperCase() ? word : word.split('').reverse().join('');
    return word[0] === word[0].toUpperCase() ? word : word.split('').reverse().join('');
}

console.log(convertText('hello'));
console.log(convertText(' '));
console.log(convertText('Hello'));
