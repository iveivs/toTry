const obj = {
	name: 'Qwerty',
	age: 1234,
	adress: {
		city: 'Some City',
		sttreet: 'Some Street'
	}
}

const obj2 = Object.assign({}, obj)
obj2.age = 9876

console.log(obj);