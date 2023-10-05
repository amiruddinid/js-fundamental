//pewarisan
// class utama / parent / super class
class Person{
    constructor(name, address){
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

const person = new Person('Paijo','Solo');
person.introduce()
person.work()

//inherintance ditandai dengan keyword extends
class Programmer extends Person{
    constructor(name, address, language, position){
        super(name, address)
        this.programmingLanguages = language
        this.position = position
    }
    //overidding - mereplace tanpa parameter
    introduce(){
        super.introduce()
        console.log(`Aku diterima di posisi ${this.position}`)
    }
    //overloading - mereplace dengan parameter
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

const Paijo = new Programmer("Paijo", "Solo", ["HTML", "CSS", "JS"], "Junior Frontend")
console.log(Paijo)
Paijo.introduce()
Paijo.work("Binar Academy")
Paijo.code()

class Python extends Programmer{
    constructor(name, address, language, position){
        super(name, address, language, position)
    }
    introduce(){
        
    }
}

const Rian = new Python("Rian", "Solo", ["HTML", "CSS", "JS"], "Junior Frontend")
console.log(Rian)
Rian.introduce()
