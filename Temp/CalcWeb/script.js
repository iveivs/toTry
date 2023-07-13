// const input1 = document.querySelector('.input1');
// const get = input1.value;
// console.log(get);


// document.querySelector('.btn-operation1').addEventListener('click', function() {
    
//     const text = document.querySelector('.textarea1').value;
//     console.log(text);
// });

let res;
document.querySelector('.btn-operation1').addEventListener('click', function() {
    
    const input1 = Number(document.querySelector('.input1').value);
    const input2 = Number(document.querySelector('.input2').value);
    res = input1 + input2;
    console.log(res);
});

document.querySelector('.btn-operation2').addEventListener('click', function() {
    
    const input1 = Number(document.querySelector('.input1').value);
    const input2 = Number(document.querySelector('.input2').value);
    res = input1 - input2;
    console.log(res);
});

document.querySelector('.btn-operation3').addEventListener('click', function() {
    
    const input1 = Number(document.querySelector('.input1').value);
    const input2 = Number(document.querySelector('.input2').value);
    res = input1 * input2;
    console.log(res);
});

document.querySelector('.btn-operation4').addEventListener('click', function() {
    
    const input1 = Number(document.querySelector('.input1').value);
    const input2 = Number(document.querySelector('.input2').value);
    if(input1 != 0 && input2 != 0) {
        res = input1 / input2;
    } else {
        alert("Вы ввели недопустимое значение")
    }
    console.log(res);
});

document.querySelector('.btn-result').addEventListener('click', function() {
    document.querySelector('.output').innerText = res;
})

document.querySelector('.btn-operation_sbros').addEventListener('click', function() {
        document.querySelector('.input1').value = '';
        document.querySelector('.input2').value = '';
        document.querySelector('.output').innerText = '';
        
    })
