// apa itu class ?

// blueprint untuk membuat objek
// tempat deklarasi objek
// kalau menurut saya class seperti klasifikasi dari umum sampai spesifik

// 1. berkaitan dengan object di javascript

// 2. object = tipe data / tempat untuk menyimpan data dalam bentuk deskriptif

// Person
// - Name
// - Alamat
// - Walk
// - Eat

const namaPerson = 'Amir';
const addressPerson = 'Malang'
const walkPerson = function(){
    console.log('jalan - jalan')
}

// object literal
const person1 = {
    name: 'Amir',
    address: 'Malang',
    walk: function(){
        console.log('jalan - jalan')
    },
    eat: function(){
        console.log('makan - makan')
    }
}
console.log(person1.address)

const kucing = {
    name: 'Alex',
    address: 'Malang',
    walk: function(){
        console.log('jalan - jalan')
    },
    eat: function(){
        console.log('makan - makan')
    }
} 
console.log(kucing.address)

class Person{
    constructor(name, address){
        this.name = name
        this.address = address
    }
    create(){
        console.log('jalan - jalan')
    }
    read(){

    }
    update(){
        console.log('makan - makan')
    }
    delete(){

    }
}

const person2 = new Person('Bayu', 'Surabaya') // object
const person3 = new Person('Bambang', 'Jakarta')
const person4 = new Person('Boyaa', 'Yaman')
const person5 = new Person('Bunga', 'Bandung')
const person6 = new Person('Budi', 'Bali')

const allPerson = [person1, person2, person3, person4, person5, person6]
