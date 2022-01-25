class Animal {
    constructor(name) {
        this.name = name
    }
    makeSound() {}
}

class Lion extends Animal {
    constructor() {
        super()
    }
    makeSound() {
        return 'roar'
    }
}

class Snake extends Animal {
    constructor() {
        super()
    }
    makeSound() {
        return 'hiss'
    }
}

const animals = [
    new Animal('lion'),
    new Animal('snake'),
]

function AnimalSound(a) {
    for (let i = 0; i <= a.length; i++) {
        a[i].makeSound()
    }
}



AnimalSound(animals)