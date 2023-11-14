class Person{
    // Add static property
    #isLivingOn = "Hidup di ";

    constructor(name, address){
        this.name = name
        this.address = address
        this.hidup = this.constructor.isLivingOn + address
    }

    introduce(){
        return `Hi, my name is ${this.name}`
    }

    // dianggap protected hanya bisa diakses di dalam class / turunanya
    _call(){
        return 'Halo'
    }
}

// variable atau function yang ada di dalam class tersebut tidak bisa di pakai
// diluar class meskipun class tersebut adalah turunan / inheritance
class Programmer extends Person{
    #fun = "Super fun! "
    constructor(name, address, programmingLanguage){
        super(name, address)
        this.programmingLanguage = programmingLanguage
    }
    //private method
    #introduce(year){
        return super.introduce() + ", I can use " + this.programmingLanguage + " for " + year + " year"
    }
    code(year){
        return this.#fun + this.#introduce(year)
    }
    callMe(){
        return 'Halo, ' + this.name
    }
}

const a = new Person('Agus', 'Malang')
const b = new Person('Paijo', 'Semarang')

console.log(a.introduce(), b)

const c = new Programmer("Mari", "Bali", "Java")

//console.log(c.#fun); //SyntaxError: Private field '#fun' must be declared in an enclosing class

// #function multiply(a,b){
//     return a * b
// }

// console.log(multiply(1,1))

console.log(c._call(), c.callMe())