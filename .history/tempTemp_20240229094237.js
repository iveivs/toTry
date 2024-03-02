const digits = {Z:2000, M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

function roman2arabic(str){
	if (!/^[IVXLCDMZ]+$/i.test(str)) throw new Error('Incorrect roman number format: ' + str)
	return str.toUpperCase().split('').reduce(function(r,v,i,arr){
		const [ a, b, c ] = [ digits[arr[i]], digits[arr[i+1]], digits[arr[i+2]]];
		if (b && c && a <= b && b < c)
			throw new Error('Incorrect roman number format: ' + str);
		return b > a ? r - a : r + a;
	}, 0)
}

function arabic2roman(num){
	if (!/^\-?\d+$/.test(num+'')) throw new Error('Can`t convert that arabic numeric to roman: ' + num)
	if (num < 1) return '';
	let result = '';
	for (let key in digits)
		while ( num >= digits[key] ) {
			result += key;
			num -= digits[key];
		}
	return result;
}

function calculator(string){
	let badChars = [];
	string = string.replace(/[^IVXLCDMZ\d+\-*\/]/gi, chr => {
		if (chr !== ' ') badChars.push(chr);
		return '';
	});
	if (badChars.length > 0) 
		throw Error('Символы не допустимы: ' + badChars.join(' '));
	let isRoman = /^[IVXLCDMZ]+$/i,
		vars = string.split(/[+\-*\/]/g),
		action = string.match(/[+\-*\/]/)[0];
	if (vars.length !== 2) 
		throw Error("Должно быть лишь два операнда");
	let r = vars.reduce((s,v)=> s + isRoman.test(v),0);
	if (r === 1)
		throw Error("Оба числа должны быть либо римскими, либо арабскими, исправьте выражение: " + string);
	else if (r === 2)
		vars = vars.map(v=>roman2arabic(v));
	else if (vars.reduce((s,v) => s + /^\d+$/.test(v)) < 2)
		throw Error("Приведенные операнды не допустимы, проверьте выражение: " + string);
	if (vars.some(v => v < 1 || v > 10))
			throw Error("Допустимо значение операндов лишь от 1 до 10 включительно")
	let result = Math.floor(eval(vars.join(action)))
	return r === 0 ? result.toString() : arabic2roman(result)
}

console.log(object);