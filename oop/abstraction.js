// class abstract / class yang masih belum dikhususkan / definisinya masih umum
class Person{
    // Add static property
    static isLivingOn = "Hidup di ";

    constructor(name, address){
        if(this.constructor === Person){
            throw new Error("Tidak bisa instantiate dari abstract class")
        }
        this.name = name
        this.address = address
        this.profession = this.constructor.name
    }

    introduce(){
        return `Hi, my name is ${this.name}`
    }
}

// class turunan yang lebih spesifik / khusus
class Programmer extends Person{
    constructor(name, address, programmingLanguage){
        super(name, address)
        this.programmingLanguage = programmingLanguage
    }

    introduce(year){
        return super.introduce() + ", I can use " + this.programmingLanguage + " for " + year + " year"
    }
    code(){
        return this.programmingLanguage[Math.floor(Math.random * this.programmingLanguage.length)]
    }
}

// const budi = new Person("Budi", "Bandung")
const ahmad = new Programmer("ahmad", "Tasik", "PHP")

console.log(ahmad)