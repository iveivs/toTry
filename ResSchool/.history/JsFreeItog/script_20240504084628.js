const list = doc

async function start() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
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