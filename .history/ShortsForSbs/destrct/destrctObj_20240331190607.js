const obj = {
    name: 'Ivan',
    age: 123,
    adress: {
        city: 'Some City',
        street: 'Some Street'
    }
}

const obj2 = {...obj, name: 'Kolya'}
console.log(obj);
console.log(obj2);

let apple = 'someApple'
let lime = 'someLime'

const someObj = {
    fruits: {
        apple: 'apple',
        orange: 'orange',
        lime: 'lime'
    },
    drinks: {
        juce: 'juce',
        tea: 'tea',
        coctail: 'coctail'
    }
}

(
    { fruits: { apple, lime }, } = someObj
)

console.log(lime);


