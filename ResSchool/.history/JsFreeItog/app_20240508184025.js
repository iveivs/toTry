const list = document.querySelector('#list')
const input = document.querySelector('.form-control')
let USERS = []

input.addEventListener('input', (e) => {
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
                <div class="list-style list-hidden" id="hidden">username: ${user.username} <br> phone: ${user.phone}</div>
            </div>
            
        </div>
    `
}

start()

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('list-style')){
        console.log(e.target.firstChild);
        e.target.firstElementChild.classList.toggle('list-hidden') 
        if(e.target.firstElementChild.contains('list-hidden')) {
            e.target.firstChild.textContent = 'less info...'
        }
        // if(e.target.firstChild.textContent == 'more info...'){
        //     e.target.firstChild.textContent = 'more info...'
        // } else {
        //     e.target.firstChild.textContent = 'less info...'
        // }
    }
})
