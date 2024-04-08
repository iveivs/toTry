console.log('Hoisted ' + add(100, 200));

function add(numOne, numTwo) {
	return numOne + numTwo
}

let addition = add
console.log('Assigned ' + addition(33,44));

let anonimus = function(numOne, numTwo) {
    let result = numOne + numTwo
    return result
}

