const obj = {
    name: 'Any',
    age: 123,
    adress: 'Some City',
    bool: true
}

const obj2 = {
    ...obj,
    name: 'Some name',
    bool: !obj2.bool
}
console.log(obj2);