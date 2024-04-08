const obj = {
    name: 'Any',
    age: 123,
    adress: 'Some City'
}

const obj2 = {
    ...obj,
    name: ''
}
console.log(obj2);