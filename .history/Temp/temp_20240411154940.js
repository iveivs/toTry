function convertText(word) {
    return word[0] === word[0].toUpperCase() ? word : word.split('').reverse().join('');
}

console.log(convertText(''));