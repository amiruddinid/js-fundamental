// Basic operator / arimatika / matematika
// Terms
// Operan : adalah objek operasi matematika / object dari sebuah operasi, yaitu objek atau kuantitas yang dioperasikan.
// biasanya orang2 menyebut arguments daripada operan
let sembilan = 3 + 6
// 3 dan 6 adalah operan
// + adalah operator
// Unary : operator yang memiliki 1 operan
let x = 1;
let y = 2;
let m = -y;

// binary : operator yang memiliki 2 operan
let plus = x + y;
console.log(plus);

// operator matematika : 
// Tambah +,
// Kurang -,
// Kali *,
// Bagi /,
// Hasil Bagi %,
console.log( 5 % 2 ); // 1, hasil bagi dari 5 dibagi 2
// Pangkat **
console.log( 2 ** 2 ); // 2² = 4

// pengabungan string dengan binary +
let namaLengkap = 'Amir'+'Udin' ;
console.log(namaLengkap) // AmirUdin

//Numeric conversion, unary +
// tidak berefek ke numbers
alert( +x ); // 1

alert( +m ); // -2

// konversi non-numbers
alert( +true ); // 1
alert( +"" );   // 0

//shorthand operator
// daripada :
// let n = 2;
// n = n + 5;
// n = n * 2;

// mending : 
let n = 2;
n += 5; // n = 7 (same as n = n + 5)
n *= 2; // n = 14 (same as n = n * 2)

console.log( n ); // 14

// increment :
let inc = 2;
inc++; // bekerja sama dengan inc = inc + 1, tapi lebih singkat
console.log( inc ); // 3

// decrement
let dec = 2;
dec--; // bekerja sama dengan dec = dec - 1, tapi lebih singkat
console.log( dec ); // 1

//Logical operator
// operator yang menentukan operan mana yang akan menjadi hasil 
// dari operasi tersebut.

//truthy : hasil / nilai yang bernilai true / benar
//falsy : hasil / nilai yang bernilai false / salah

// AND (&&)
// akan menghasilkan nilai truthy kalau operan sama2 truthy
console.log(1 && 10); // 10
console.log(0 && 100); // 0

// OR (||) operan1 || operan2
// akan bernilai / menampilkan operan1 kalau operan 1 truthy
// akan bernilai operan2 kalau operan1 falsy
console.log(1 || 10); // 1
console.log(0 || 100); // 100

// NOT (!) !operan
// menegasikan atau mengubah sebuah nilai ke nilai kebalikanya
// truthy jadi falsy dan falsy menjadi truthy
console.log(!1)
console.log(!0)

console.log(!0 && 10 < 1 || "ahhh")

// Relational operator
// operator yang digunakan untuk melakukan komparasi terhadap operan-operannya

// in
// operasi untuk mengecek apakah ada object (key) di dalam sebuah 
// variable yang bersifat koleksi (Array atau Object)

const fruits = ["Alpukat", 'Buah Naga', 'Apel'];

const favorite = 0 in fruits;
console.log(favorite)

// instanceof
// mengecek apakah suatu data merupakan instansi dari tipe data tertentu.
const date = new Date() // hari ini
console.log(date instanceof Date); // true


//Unary Operator
// delete
// menghapus sebuah atribut dari object
const person = {
    name: "sabrina",
    age: 17
}

delete person.age

// typeof
// digunakan untuk mencari tau tipe data dari sebuah variabel atau literal.
console.log(typeof person, typeof fruits, typeof plus) // object, object, number

// Conditional operator (operan1 ? operan2 : operan3)
// operator yang membutuhkan 3 operan. Dimana operan paling kiri akan menjadi 
// penentu operan mana yang akan menjadi hasil dari ekspresi atau operasi tersebut. 

console.log(1 > 10 ? "OK" : "MEH!") // 'MEH!'
console.log(100 > 10 ? "OK" : "MEH!")// 'OK'

const isRaining = true;
const thingsToBring = isRaining ? "Payung" : "Sun Screen";

console.log(isRaining, thingsToBring)

// if(isRaining){
//     console.log("Payung")
// }else{
//     console.log("Sun Screen")
// }

let things

if(isRaining){
    things = "Payung"
}else{
    things = "Sun Screen"
}

console.log(things)