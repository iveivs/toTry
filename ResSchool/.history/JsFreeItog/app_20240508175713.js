const list = document.querySelector('#list')
const input = document.querySelector('.form-control')
let USERS = []

input.addEventListener('input', (e) => {
    console.log(e.target.value);
    const value = e.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user) => user.name.toLowerCase().includes(value))
    render(filteredUsers)
})

async function start() {
    list.innerHTML = "Loading..."
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        USERS = data
        
        render(data)
    } catch (err) {
        list.style.color = 'red'
        list.innerHTML = err.message
    }
}

function render(users = []) {
    if(users.length === 0){
        list.innerHTML = 'Совпадений не найдено'
    } else {
        const html = users.map(toHtml).join(' ')
        list.innerHTML = html
    }
    
}

function toHtml(user) {
    return `
        <div class="cover">
            <div class="list-group-item">${user.name} </div>
            <div class="list-style">more info...
                <div class="list-style list-hidden" id="hidden">${user.username}</div>
            </div>
            
        </div>
    `
}



start()

list.addEventListener('click', (e) => {
    if()
})



// <li class="list-group-item">${user.name} </li>