class User{
    constructor(props){
        let { email, password } = props;
        this.email = email,
        this.encryptedPassword = this.#encrypt(password);
    }

    // Private method 
    #encrypt = (password) => {
        return `encrypted-version-of-${password}`
    }

    #decrypt = () => {
        return this.encryptedPassword.split(`encrypted-version-of-`)[1];
    }

    //setter
    setEmail = (email) => {
        this.email = email
    }

    //getter
    getEmail = () => {
        return this.email
    }

    authenticate(password){
        return this.#decrypt() === password;
    }
}

//user baru
let Bot = new User({
    email: "bot@mail.com",
    password: "123456"
})

console.log(Bot)

const isAuthenticated = Bot.authenticate("123455")

console.log(isAuthenticated)

Bot.setEmail("bot1234@mail.com")
console.log(Bot)
console.log(Bot.getEmail())
console.log("081-123-456".split('-').join())