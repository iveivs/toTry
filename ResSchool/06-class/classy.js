// const animal = {
//     name: 'animal',
//     age: 5,
//     hastail: true
// }

class Animal {
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hastail = options.hastail
    }
    voice() {
        console.log('I am animal');
    }
}

// const animal = new Animal ({
//     name: 'animal',
//     age: 5,
//     hastail: true
// })

// создаём дочерний класс от Animal
class Cat extends Animal {
    static type1 = "CAT"
    // Когда мы реализуем метод конструктор в дочеренем классе(который наследуется от другого класса),
    // то мы для начала должны вызвать родительский конструктор.
    // Для этого есть специальное ключевое слово super, которое по сути является методом
    constructor(options) {
        super(options)
        this.color = options.color
    }
    // В дочернем классе мы можем переписывать родительские методы
    voice() {
        console.log(" I'm cat");
    }
    // создаём геттер(он не является методом, это поле)
    get ageInfo() {
        return this.age * 7
    }
    set ageInfo(newAge) {
        this.age = newAge
    }
}

const cat1 = new Cat({
    name: 'cat1',
    age: 7,
    hasTail: true,
    color: 'Black'

})

// cat1.voice()
// =============================

class Component {
    constructor(selector) {
        // Обычно через доллар называются те переменные, которые содержат в себе какую-то DOM nod-у
        this.$el = document.querySelector(selector)
    }
    // создадим два метода, кот-е позволят скрывать или показывать элемент
    hide() {
        this.$el.style.display = 'none'
    }
    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }

}

const box1 = new Box ({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box ({
    selector: '#box2',
    size: 110,
    color: 'blue'
})

class Circle extends Box {
    constructor(options) {
        super(options) 
        this.$el.style.borderRadius = '50%'
    }
}
const c = new Circle ({
    selector: '#circle',
    size: 90,
    color: 'green'
})
