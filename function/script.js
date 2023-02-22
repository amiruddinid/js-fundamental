// function
// digunakan untuk menyimpan algoritma yang sama, yang nantinya bakal dijalanin lagi dengan input yang berbeda.

const x = 1;
const y = 2;
const z = 3;

// function keyword
function isOdd(number){
    if(number % 2 !== 0){
        console.log(number, 'itu ganjil')
    }
}

isOdd(x)
isOdd(y)
isOdd(z)

// anonym function keyword
const isEven = function(number){
    if(number % 2 === 0){
        console.log(number, 'itu genap')
    }
}

isEven(x)
isEven(y)
isEven(z)

//arrow function
const isEvenOdd = (number) => {
    if(number % 2 === 0){
        console.log(number, 'itu genap')
    }else{
        console.log(number, 'itu ganjil')
    }
}

isEvenOdd(x)
isEvenOdd(y)
isEvenOdd(z)