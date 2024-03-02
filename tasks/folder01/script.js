const tempArr = [
    {name: 'product1', price: 740, id: 1},
    {name: 'product2', price: 560, id: 2},
    {name: 'product3', price: 440, id: 3},
    {name: 'product4', price: 280, id: 4}
]

function func(arr) {
    const newArr = arr.filter((elem) => elem.price < 500)
    return newArr
}
console.log(func(tempArr));