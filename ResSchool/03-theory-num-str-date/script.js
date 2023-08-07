
let mode = 'full'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')


// более простой вариант
// ====================
// fullBtn.onclick = function() {
//     mode = 'full'
//     update()
// }

// dateBtn.onclick = function() {
//     mode = 'date'
//     update()
// }

// timeBtn.onclick = function() {
//     mode = 'time'
//     update()
// }
// ====================
// Более продвинутый вариант(через замыкание)
function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}
fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')
// ====================

setInterval(() => {
    update()
},1000) 
update()

function update() {
    output.textContent = format(mode)
}
debugger
// pure function
function format(formatMode) {
    const now = new Date()
    switch(formatMode) {
        case 'time': 
            return now.toLocaleTimeString()
        case 'date': 
            return now.toLocaleDateString()
        case 'full': 
            return now.toLocaleDateString() + ' - ' + now.toLocaleTimeString()
        default:
            return now.toLocaleTimeString()
    }
}


// dateBtn.onclick = function() {
//     output.innerHTML = now.toDateString()
// }
// console.log(now.toDateString());
// console.log(now.toLocaleDateString());
