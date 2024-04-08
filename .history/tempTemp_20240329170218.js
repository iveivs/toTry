console.log('Hoisted ' + add(100, 200));

function add(numOne, numTwo) {
	return numOne + numTwo
}

let addition = add
console.log('object');