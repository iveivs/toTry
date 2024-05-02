function convertText(word) {
    if(word == ' ') {
        return ' '
    }
    console.log('test', word[0].toUpperCase());
    return word[0] === word[0].toUpperCase() ? word : word.split('').reverse().join('');
}

console.log(convertText('hello'));
console.log(convertText(' '));
console.log(convertText('Hello'));


