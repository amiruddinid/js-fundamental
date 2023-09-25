// fungsi function
// menuliskan procedure yang kemungkinan akan di lakukan berulang biar bisa di gunakan di manapun

//function declaration
// function nama_function(parameter){
//     procedure
//     return hasil
// }
const PI = 3.14;

console.log(tambah(10,5))
function tambah(a,b){
    const hasil = a + b; //local scope
    return hasil // return a + b;
}

// function expression
// console.log(kurang(10,5)) error mewarisi sifat variable

const kurang = function(a,b){
    return a - b * PI;
}
console.log(kurang(10,5))

// arrow function
const kali = () => a*b
console.log(kali(2, tambah(10,5)))

// currying
const bagi = a => () => a/b
console.log(bagi(8)(2))

function tambah(a,b){
    const hasil = a + b; //local scope
    return hasil // return a + b;
}

// Note: beda tiap declarasi function