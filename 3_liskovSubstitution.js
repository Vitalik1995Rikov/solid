class Person {
    
}

class Member extends Person {
    access() {
        console.log('Есть доступ')
    }
}
class Guest extends Person {
    access() {
        console.log('Нет доступа')
    }
}

class Man extends Member {}
class Woman extends Guest {}

const man = new Man()
const woman = new Woman()

man.access()
woman.access()