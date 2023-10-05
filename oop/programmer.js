const Person = require('./person');

class Programmer extends Person{
    constructor(name, address, language, position){
        super(name, address)
        this.programmingLanguages = language
        this.position = position
    }
    // introduce(){
    //     console.log(`Halo namaku ${this.name} dari ${this.address}`)
    // }
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
Paijo.code()