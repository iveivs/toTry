function pow(x, n) {
    let result = 1;
  
    // умножаем result на x n раз в цикле
    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  alert( pow(2, 3) );
