// tldr: fungsi class adalah untuk membuat object
// OOP : kita ngoding tapi berbentuk object2
//object menggunakan class / OOP
class Person{
    // Add static property
    static isLivingOn = "Hidup di ";

    constructor(name, address){
        this.name = name
        this.address = address
        this.hidup = this.constructor.isLivingOn + address
    }

    introduce(){
        return `Hi, my name is ${this.name}`
    }
}

class Programmer extends Person{
    constructor(name, address, programmingLanguage){
        super(name, address)
        this.programmingLanguage = programmingLanguage
    }

    introduce(){
        return super.introduce() + ", I can use " + this.programmingLanguage
    }
}

console.log('isLivingOn', Person.isLivingOn)

// object literal
const personA = {
    name: "Bambang",
    address: "Jakarta",
    introduce: function(){
        return `Hi, my name is ${this.name}`
    }
}
const personB = {
    name: "Bambang",
    address: "Jakarta",
    introduce: function(){
        return `Hi, my name is ${this.name}`
    }
}

//instantiate menggunakan keyword new
const a = new Person('Agus', 'Malang')
const b = new Person('Paijo', 'Semarang')

console.log(a, b, personA.introduce())

const c = new Programmer("Mari", "Bali", "Java")

console.log(c.introduce());

//soal

const persegi = {
    sisi: 4,
    keliling: function(){
        return this.sisi * 4
    },
    luas: function(){
        return 'luas'
    }
}

const kubus = {
    volume: function(){
        return 'volume'
    }
}