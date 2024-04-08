const obj = {
    name: 'Any',
    age: 123,
    adress: 'Some City',
    bool: true
}

const obj2 = {
    ...obj,
    name: 'Some name'
}
console.log(obj2);