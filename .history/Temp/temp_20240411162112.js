function getNumberExplanation(num) {
    switch (num) {
        case 666:
            return 'devil number'
        case 42:
            return 'answer for everything'
        case 7:
            return 'prime number'
        default:
            return 'just a number'
    }
}
console.log(getNumberExplanation(8));
console.log(getNumberExplanation(666));
console.log(getNumberExplanation(42));
console.log(getNumberExplanation(7));


