console.log('Hoisted ' + add(100, 200));

function add(numOne, numTwo) {
	return numOne + numTwo
}

let addition = add
console.log('Assigned ' + addition(33,44));

// ==================

console.log(addition2);
var addition2 = add


let anonimus = function(numOne, numTwo) {
    let result = numOne + numTwo
    return result
}
console.log('anonymus ' + anonimus(2, 3));

// ==================
// самовызывающаяся ф-я
let iffy = ( function () {
    let str = "Self Inviked Output"
    return str
}) ()
console.log(iffy);

// ==================

const arrFunc = (numOne, numTwo) => {
    return numOne + numTwo
}
console.log('arrFunc', arrFunc(1024, 1440));

let myName = 'External Script'
function readName() {console.log(myName)}
readName()

// ==================

const a = 10

const arrFunSum = () => {
    return a + 100
}

console.log('arrFunSum', arrFunSum());
// - - -

const b = 20
const exprnNunSum = function() {
    return b + 2
}



