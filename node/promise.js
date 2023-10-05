//Promise
const isPasswordCorrect = (password) => {
    return new Promise((resolve, reject) => {
        console.log('Password', password)
        if(password !== '123456') 
            return reject("Wrong password!")

        return resolve("Password Correct!")
    })
}

const login = (password) => {
    let isCorrect;
    console.log('jalan pertama')
    isPasswordCorrect(password) //persis seperti timeout
        .then((res) => console.log('jalan kedua'))
    console.log('jalan ketiga')
}

isPasswordCorrect('123456')
    .then((res) => console.log('ini resolve', res))
    .catch((err) => console.error('ini error', err))

isPasswordCorrect('123455')
    .then((res) => console.log('ini resolve', res))
    .catch((err) => console.error('ini error', err))

login('123456')