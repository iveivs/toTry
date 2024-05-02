// let a = null
// let b = ''
// let c = 0
// console.log(a && b && c);

// let d = undefined
// let f = 'stroke'
// console.log(d ?? f);
console.log('test');

alert( alert(1) || 2 || alert(3) )

// - - - - -
let somenName = false
const value = somenName || ''
console.log(typeof value); // вернёт последнее ложное или первое трушное

let somenName2 = true
const value2 = somenName2 && '12'
console.log(value2); // вернёт последнее трушное или первое трушное