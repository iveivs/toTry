function printNumbers(num) { 
    while(num >= 0) {
        if(num === 0){
            console.log('finished!');
            return
        }
        console.log(num);
        num -= 1
    }
}
printNumbers(4)
