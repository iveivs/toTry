const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const summBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

//  код из урока
// submitBtn.onclick = function() {
//     const sum = Number(input1.value) + Number(input2.value)
//     resultElement.textContent = sum
// 

// моё решение
// let tempSum = false
// summBtn.onclick = function() {
//     tempSum = true
// }

// let tempMinus = false
// minusBtn.onclick = function() {
//     tempMinus = true
// }

// submitBtn.onclick = function() {
//     if(tempSum) {
//         const sum = Number(input1.value) + Number(input2.value)
//         resultElement.textContent = sum
//     }
//     if(tempMinus) {
//         const minus = Number(input1.value) - Number(input2.value)
//         resultElement.textContent = minus
//     }
// }

// - - - - - - - - - - - - - - - - -

// решение из урока:
// ШАГ 1
// summBtn.onclick = function() {
//     action = "+"
// }
// minusBtn.onclick = function() {
//     action = "-"
// }

// submitBtn.onclick = function() {
//     if(action == '+') {
//         const sum = Number(input1.value) + Number(input2.value)
//         resultElement.textContent = sum
//     } else if(action == '-') {
//         const sum = Number(input1.value) - Number(input2.value)
//         resultElement.textContent = sum
//     }
// }
//  - - - - - - - - - - - - - -
//  ШАГ 2

// summBtn.onclick = function() {
//     action = "+"
// }
// minusBtn.onclick = function() {
//     action = "-"
// }

// submitBtn.onclick = function() {
//     if(action == '+') {
//         const sum = Number(input1.value) + Number(input2.value)
//         if(sum < 0) {
//             resultElement.style.color = 'red'
//         } else {
//             resultElement.style.color = 'green'
//         }
//         resultElement.textContent = sum
//     } else if(action == '-') {
//         const sum = Number(input1.value) - Number(input2.value)
//         if(sum < 0) {
//             resultElement.style.color = 'red'
//         } else {
//             resultElement.style.color = 'green'
//         }
//         resultElement.textContent = sum
//     }
// }

//  ШАГ 3 ОПТИМИЗАЦИЯ

summBtn.onclick = function() {
    action = "+"
}
minusBtn.onclick = function() {
    action = "-"
}

function printResult (result) {
    if(result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if(actionSymbol == '+') {
        return num1 + num2
    } else if(actionSymbol == '-') {
        return num1 - num2
    } 
}
debugger

submitBtn.onclick = function() {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
}
