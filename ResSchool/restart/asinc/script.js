// Задание #2

// Напишите код, который получает список задач по URL https://jsonplaceholder.typicode.com/todos и выводит их в виде списка (<ul>) на страницу. 
// Примечание. Сетевые запросы можно выполнять с помощью функции fetch(), работающей на основе Promise API. 

const box = document.querySelector('.box')

async function getTodos() {
    try {   
        const response = await fetch('https://jsonplaceholder.typicode.com/todos ')
        const data = await response.json()
        render(data)
    } catch {

    }
}

function render(todos = []) {
    const html = todos.map(toHTML).join('')
    box.innerHTML = html
}

function toHTML(todos) {
    return `
    <ul>${todos.title}</ul>
    `
}
console.log('test');
getTodos()