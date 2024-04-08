function reverseWords(str) {
    // Go for it
    return str.split('').reverse().join('').reverse()
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));