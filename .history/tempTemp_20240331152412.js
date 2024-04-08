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
obj2.adress.city = "Another city"

console.log(obj2);
console.log(obj);

const obj3 = {...obj}
console.log(object);

const obj4 = JSON.parse(JSON.stringify(obj))
obj4.adress.city = 'No City'
console.log(obj4);
