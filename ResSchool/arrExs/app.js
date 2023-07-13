/* Theory
const array = [1, 2, 3, 5, 21]
console.log(array);
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// const notes = ['Task 1', 'Task 2', 55]

// - - - - этот метод поменяли, после того как массив поменяли на массив с объектами
// function render() {
//     // более старый вариант
//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))   
//     // }
//     // более новый вариант
//     for(let note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }
// render()

// createBtn.onclick = function () {
//     if(inputElement.value.length === 0 ) {
//         return
//     }
//     // listElement.innerHTML = 
//         listElement.insertAdjacentHTML(
//             'beforeend', 
//             getNoteTemplate(inputElement.value)
//         )
//         inputElement.value = ''
// }

// function getNoteTemplate(title) {
//     return ` 
//             <li
//                 class="list-group-item d-flex justify-content-between align-items-center"
//             >
//         <span>${title}</span>
//         <span>
//             <span class="btn btn-small btn-success">&check;</span>
//             <span class="btn btn-small btn-danger">&times;</span>
//         </span>
//         </li>
//         `
// }

const notes = [
    {
    title: 'Задача 1',
    complited: false,
},
{
    title: 'Задача 2',
    complited: true
},
]

function render() {
    listElement.innerHTML = ''
    if(notes.length === 0) {
        listElement.innerHTML = '<p> Нет заметок </p>'
    }
    // более старый вариант
    // но он пока что более нужный
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))   
    }
    // более новый вариант
    // for(let note of notes) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    // }
}
render()

// создаём и добавляем новую запись в список
createBtn.onclick = function () {
    
    if(inputElement.value.length === 0 ) {
        return
    }
    const newNote = {
        title: inputElement.value,
        complited: false
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function(event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if(type === 'toggle') {
            notes[index].complited = !notes[index].complited
        } else if( type === 'remove') {
            notes.splice(index, 1)
        }
        render()
    }
}

function getNoteTemplate(note, index) {
    return ` 
            <li
                class="list-group-item d-flex justify-content-between align-items-center"
            >
        <span class ="${note.complited ? 'text-decoration-line-through': ''}">${note.title}</span>
        <span>
            <span class="btn btn-small btn-${note.complited ? 'warning' : 'success'}" data-index="${index}" data-type = "toggle" >&check;</span>

            <span class = "btn btn-small btn-danger" data-type="remove"   data-index="${index}" >&times;</span>
        </span>
        </li>
        `
}