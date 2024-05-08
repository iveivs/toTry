const list = document.querySelector('#list')
const input = document.

async function start() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        console.log(data);
        render(data)
    } catch (err) {}
}

function render(users = []) {
    const html = users.map(toHtml).join(' ')
    list.innerHTML = html
}

function toHtml(user) {
    return `
        <li class="list-group-item">${user.name}</li>
    `
}

start()