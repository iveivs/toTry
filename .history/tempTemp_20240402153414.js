const obj = {
    name: 'Any',
    age: 123,
    adress: 'Some City',
    bool: true
}

const

const obj2 = {
    ...obj,
    name: 'Some name',
    bool: !obj.bool
}
console.log(obj2);