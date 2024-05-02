// function delay (callback, time = 1000) {
//     console.log('1');
//     setTimeout(callback, time)
// }

// delay(() => {
//     console.log('timeout');
// }, 2000)
// = = = = = = = = = = = = = = = = = = = = = = =
const delay = (time = 1000) => {
    setTimeout(()=> {

    }, time)
}
// = = = = = = = = = = = = = = = = = = = = = = =
const rootElem = document.querySelector('.root')
console.log(rootElem);

async function start() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await resp.json()
        console.log(data);
        render(data)
    } catch (err) {}
}

function render(todos = []) {
    const html = todos.map(toHtml).join(' ')
    rootElem.innerHTML = html
}

function toHtml(todo) {
    return `
        <li class="list__todos">${todo.title}</li>
    `
}

start()

// = = = = = = = = = = = = = = = = = =
function sumWithDelay(delay, a, b) {
    // Ваш код здесь...
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = a + b 
            resolve(result)
        }, delay)
    })
}

async function start2() {
    console.log('start');
    const result = await sumWithDelay(1000, 5, 5);
    console.log(result);
}

start2();