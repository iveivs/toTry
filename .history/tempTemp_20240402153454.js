const someVariable = 5

const obj = {
    name: 'Any',
    age: 123,
    adress: 'Some City',
    bool: true,
    someVariable,
}



const obj2 = {
    ...obj,
    name: 'Some name',
    bool: !obj.bool
}
console.log(obj2);