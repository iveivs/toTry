function printNumbers(num) { 
    while(num >= 0) {
        console.log(num);
        if(num === 0){
            console.log();
        }
        num -= 1
    }
}
printNumbers(4)
