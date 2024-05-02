const multiplyNumbersFromRange = (start, finish) => {
    let i = start;
    let multiply = 1
    while (i <= finish) {
        multiply *= i
        i += 1
    }
    return multiply;
}

multiplyNumbersFromRange(3, 5);
