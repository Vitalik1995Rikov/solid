const generateId = () => Date.now() * Math.random();

class User {
    constructor(username, password) {
        this.id = generateId()
        this.username = username
        this.password = password
    }
}

class UserName {
    constructor(user) {
        this.user = user
    }
    getUserName() {
        console.log(`${this.user.username}`)
    }
}

class UserPassword {
    constructor(user) {
        this.user = user
    }
    getUserPassword() {
        console.log(`${this.user.password}`)
    }
}


const user = new User('Alex', '12')

const userName = new UserName(user)
const userPassword = new UserPassword(user)

userName.getUserName()
userPassword.getUserPassword()


