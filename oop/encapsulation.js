
class Person{
    #address
    constructor(name, address){
        this.name = name
        this.#address = address
    }
    introduce(){
        console.log(`Halo namaku ${this.name} dari ${this.#address}`)
    }
    //private ditandai dengan # didepan nama property / method
    //hanya bisa di panggil / pakai di kelas deklarasinya saja
    #work(){
        console.log(!this.position ? "Not working yet" : "Im working as" + this.position)
    }
}

class Programmer extends Person{
    constructor(name, address, language, position){
        super(name, address)
        this.programmingLanguages = language
        this.position = position
    }
    // introduce(){
    //     super.introduce()
    //     console.log(`Aku diterima di posisi ${this.position}`)
    // }
    work(company){
        // super.#work() //Unexpected private field
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
console.log(Paijo.#address)
Paijo.introduce()
Paijo.work("Binar Academy")
Paijo.code()