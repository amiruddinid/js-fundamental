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

    //overiding
    // introduce(){
    //     return super.introduce() + ", I can use " + this.programmingLanguage
    // }
    //overloading
    introduce(year){
        return super.introduce() + ", I can use " + this.programmingLanguage + " for " + year + " year"
    }
    code(){
        return this.programmingLanguage[Math.floor(Math.random * this.programmingLanguage.length)]
    }
}