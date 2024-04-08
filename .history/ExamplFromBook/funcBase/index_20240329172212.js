console.log('Hoisted ' + add(100, 200));

function add(numOne, numTwo) {
	return numOne + numTwo
}

console.log();
let addition = add
console.log('Assigned ' + addition(33,44));

let anonimus = function(numOne, numTwo) {
    let result = numOne + numTwo
    return result
}

console.log('Anonymus ' + anonimus(2, 3));

let iffy = ( function () {
    let str = "Self Inviked Output"
    return str
}) ()

console.log(iffy);