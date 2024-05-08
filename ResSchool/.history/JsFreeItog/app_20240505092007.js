const list = document.querySelector('#list')
const input = document.querySelector('.form-control')
let USERS = []

async function start() {
    list.innerHTML = "Loading..."
    try {
        const resp = await fetch('ht1tps://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        USERS = data
        const filteredUsers = USERS.filter((user) => )
        render(data)
    } catch (err) {
        list.style.color = 'red'
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
    const value = e.target.value
})

start()