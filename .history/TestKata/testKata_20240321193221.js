function calculator(string) {
    const romanian = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',
        'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX',
        'XX', 'XXI', 'XXII', 'XXIII', 'XXIV', 'XXV', 'XXVI', 'XXVII', 'XXVIII', 'XXVIX',
        'XXX', 'XXXI', 'XXXII', 'XXXIII', 'XXXIV', 'XXXV', 'XXXVI', 'XXXVII', 'XXXVIII', 'XXXVIX',
        'XL', 'XLI', 'XLII', 'XLIII', 'XLIV', 'XLV', 'XLVI', 'XLVII', 'XLVIII', 'XLIX',
        'L', 'LI', 'LII', 'LIII', 'LIV', 'LV', 'LVI', 'LVII', 'LVIII', 'LIX',
        'LX', 'LXI', 'LXII', 'LXIII', 'LXIV', 'LXV', 'LXVI', 'LXVII', 'LXVIII', 'LXIX',
        'LXX', 'LXXI', 'LXXII', 'LXXIII', 'LXXIV', 'LXXV', 'LXXVI', 'LXXVII', 'LXXVIII', 'LXXIX',
        'LXXX', 'LXXXI', 'LXXXII', 'LXXXIII', 'LXXXIV', 'LXXXV', 'LXXXVI', 'LXXXVII', 'LXXXVIII', 'LXXXIX',
        'XC', 'XCI', 'XCII', 'XCIII', 'XCIV', 'XCV', 'XCVI', 'XCVII', 'XCVIII', 'XCIX',
        'C'
    ]
  
    const inputToSplite = string.split(' ')
    if(string === '' || string.length < 5 || string.includes('%')){
      throw new Error('ашЫбка ');
    }
    if (inputToSplite.length < 2 || inputToSplite.length > 3) {
      throw new Error('ашЫбка ' + str);
    }
    if(inputToSplite[0] > 10 || inputToSplite[2] > 10 ) {
      throw new Error('ашЫбка ');
    }
    if(inputToSplite[0] === '0' || inputToSplite[2] === '0' ) {
      throw new Error('ашЫбка ');
    }
  
    if (romanian.includes(inputToSplite[0]) && romanian.includes(inputToSplite[2])) {
    const varA = romanian.indexOf(inputToSplite[0]) + 1
    const varB = romanian.indexOf(inputToSplite[2]) + 1
    if(varA > 10 || varB > 10){
      throw new Error('ашЫбка ');
    }
    let result
    switch (inputToSplite[1]) {
    case '+':
    result = +varA + +varB
    break
  
    case '-':
    result = +varA - +varB
    break
  
    case '*':
    result = +varA * +varB
    break
  
    case '/':
    result = Math.floor(+varA / +varB)
    break
    default:
      return 'Некорректные данные'
    }
    return result <= 0 ? '' : String(romanian[result -1])
    }
  
    let result
    switch (inputToSplite[1]) {
    case '+':
    result = +inputToSplite[0] + +inputToSplite[2]
    break
  
    case '-':
    result = +inputToSplite[0] - +inputToSplite[2]
    break
  
    case '*':
    result = +inputToSplite[0] * +inputToSplite[2]
    break
  
    case '/':
    result = Math.floor(+inputToSplite[0] / +inputToSplite[2])
    break
    default:
    return 'Некорректные данные'
    }
    if(Number.isNaN(result)){
      throw new Error('ашЫбка ');
    }
    return String(result)
  }