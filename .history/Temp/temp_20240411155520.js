function convertText(word) {
    if(word == ' ') {
        return ' '
    }
    // return word[0] === word[0].toUpperCase() ? word : word.split('').reverse().join('');
    const reverse = reverse(word)
    return word[0] === word[0].toUpperCase() ? word : ;
}

console.log(convertText('hello'));
console.log(convertText(' '));
console.log(convertText('Hello'));
