//async
const isPasswordCorrect = async(password) => {
    console.log('Password', password)
    if(password !== '123456')
        throw new Error("Wrong password!")

    return "Password Correct!"
}

//async function login(){ }
const login = async(password) => {
    console.log('pertama')
    const isPWCorrect = await isPasswordCorrect(password)
    console.log('kedua')
    const isEmailCorrect = await isPasswordCorrect(password)
    console.log('ketiga')
    
    console.log('ini login', isPWCorrect)
}

isPasswordCorrect('123456')
    .then((res) => console.log('ini resolve', res))
    .catch((err) => console.error('ini error', err.message))

isPasswordCorrect('123455')
    .then((res) => console.log('ini resolve', res))
    .catch((err) => console.error('ini error', err.message))

login('123456')