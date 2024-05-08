const list = document.querySelector('#list')
const input = document.querySelector('.form-control')

async function start() {
    list.innerHTML = "Loading..."
    try {
        const resp = await fetch('h1ttps://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        console.log(data);
        render(data)
    } catch (err) {
        list.innerHTML = err.message
    }
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

input.addEventListener('input', (e) => {
    console.log(e.target.value);
})

start()