const os = require('os')
const fs = require('fs')
const sgtg = require('./luasSegitiga')

// import luasSegitiga from './luasSegitiga.js'

console.log(`Freemem : ${os.freemem}`)
console.log(`sgtg : ${sgtg(6, 5)}`)

// read file diluar code
const isi = fs.readFileSync('./text.txt', 'utf-8')
console.log(isi)

fs.writeFileSync("./wrt.txt", 'Aku dibuat dari nodejs')

const c = fs.writeFileSync("./cars.json", JSON.stringify({
    "brand" : "Honda",
    "type" : "Civic FD"
}))