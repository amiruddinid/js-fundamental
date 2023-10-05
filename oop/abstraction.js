//abstraction
//Person adalah kelas utama dan masih abstract
class Person{
    constructor(name, address){
        if(this.constructor === Person){
            throw new Error("Cannot instantiate from Abstract Class")
        }
        this.name = name
        this.address = address
    }
    introduce(){
        console.log(`Halo namaku ${this.name} dari ${this.address}`)
    }
    work(){
        console.log(!this.position ? "Not working yet" : "Im working as" + this.position)
    }
}

// const Paijo = new Person('paijo','solo')
// console.log(Paijo)
//inheritance
class Programmer extends Person{
    constructor(name, address, language, position){
        super(name, address)
        this.programmingLanguages = language
        this.position = position
    }
    introduce(){
        super.introduce()
        console.log(`Aku diterima di posisi ${this.position}`)
    }
    work(company){
        super.work()
        console.log('at', company)
    }
    code(){
        console.log(
            "code this",
            this.programmingLanguages
        )
    }
}

const Bambang = new Programmer('Bambang','surabaya','Java', 'Senior')
console.log(Bambang)

