class Person{
    // Add static property
    static isLivingOn = "Hidup di ";

    constructor(name, address){
        this.name = name
        this.address = address
        this.hidup = this.constructor.isLivingOn + address
    }

    introduce(){
        console.log(`Hi, my name is ${this.name}`)
    }
}

//mixins helper/module
const PublicServer = Base => class extends Base {
    save(){
        console.log("Thanks")
    }
}

const Military = Base => class extends Base {
    shoot(){
        console.log("DOR!")
    }
}

class Doctor extends PublicServer(Person()) {
    constructor(name, address){
        super(name, address)
    }
    work(){
        super.introduce()
        super.save()
    }
}

const adi = new Doctor("adi", "jakarta")

console.log(adi.work())