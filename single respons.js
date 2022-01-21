const generateId = () => Date.now() * Math.random();

class User {
    constructor(username, password) {
        this.id = generateId()
        this.username = username
        this.password = password
    }

    getUserName() {
        console.log(`${this.username}`)
    }

    getPassword() {
        console.log(`${this.password}`)
    }

    getId() {
        console.log(`${this.id}`)
    }
}

const user = new User('Alex', '12')
user.getUserName()
user.getPassword()
user.getId()
