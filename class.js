//class = blueprint untuk membuat object
class Human{
    //static property
    canDie = true

    //instance property
    constructor(n, a){
        this.name = n
        this.address = a
    }

    //static method
    walk(){
        return `${this.name} lagi jalan2`
    }
}

const human1 = new Human('Bambang', 'Bandung');
const human2 = new Human('Putri', 'Bali');
const human3 = {
    name: "Bayu",
    address: "Surabaya",
    walk: function(){
        return `${this.name} lagi jalan2`
    }
}

//instance method
Human.prototype.breath = function(){
    return this.name + "is Breathing"
}

console.log(human1.canDie, human1.breath())

//DRY