console.log('Hoisted ' + add(100, 200));

function add(numOne, numTwo) {
	return numOne + numTwo
}

let addition = add
console.log('Assigned ' + addition(33,44));


console.log(addition2);
var addition2 = add


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

let arrFunc = (numOne, numTwo) => {
    return 
}