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

//mix-ins
function PublicServer(Base){
    return class extends Base{
        save(){
            console.log("SFX: Thank You!")
        }
    }
}

function Military(Base){
    return class extends Base{
        shoot(){
            console.log("Dor!")
        }
    }
}

class Doctor extends PublicServer(Person){
    constructor(name, address){
        super(name, address)
    }
    work(){
        console.log("Saving 1 Life")
        super.save()
    }
}

const Rudi = new Doctor('Rudi', 'NTT')
console.log(Rudi)
Rudi.work()
Rudi.introduce()

class Army extends PublicServer(Military(Person)){
    constructor(name, address){
        super(name, address)
    }
    work(){
        console.log("Saving 1 Life")
        super.save()
        super.shoot()
    }
}

const Ridho = new Army('Ridho', 'Papua')
console.log(Ridho)
Ridho.work()
Ridho.introduce()