//var
var nama = "Amir"
console.log(nama) // Muncul Amir
//Redeclared
var nama = "Udin"
console.log(nama)

nama = "Amiruddin"
console.log(nama)

//local scope akan mengubah global scope
if(true){
    var nama = "Irsyad"
}
console.log(nama)

//hoisting (variable dapat dibuat sebelum di deklarasikan)
hobi = "main game"
var hobi
console.log(hobi)

/* 
    JS 
    Modern 
*/
//let
let pekerjaan = "Software Engineer"
// let pekerjaan = "Tidur"
console.log(pekerjaan)
pekerjaan = "Ternak Lele"
console.log(pekerjaan)

// block scope
if(true){
    let pekerjaan = "Pilot"
    console.log(pekerjaan) //pilot
}
console.log(pekerjaan) //ternak lele

// mafa = "tahu"
// let mafa
// console.log(mafa) //Uncaught ReferenceError: Cannot access 'mafa' before initialization

// huruf, angka, $, _
// tidak bisa di mulai dengan angka
let apakahkaya = "Kaya"
// let 1000$ = "Mungkin Kaya"

//   console.log(_1000)

//const
const GENDER = "Laki - Laki"
console.log(GENDER)
//Error : Assignment to constant variable.
// GENDER = "Perempuan"
// console.log(GENDER)

// const GENDER = "Perempuan"

//Scope {}

//tipe data
// untuk mengecek sebuah tipe data bisa mengunakan
// console.log(typeof <nama_variable>)
// Primitif
// 1. String = text yg di awali dan diakhiri dengan ", '
//    string literal = `
   let js = "Javascript"
// 2. Number = angka
   let sepuluh = 10
   let infi = Infinity
   let nan = NaN //kesalahan komputasi
// 3. boolean
   let isNgantuk = true // false
// 4. null = data kosong
   let tong = null
// 5. Undefined
   let a

// Non Primitif
// 1. Array tipe data untuk menyimpan list / daftar
   let buku = ['novel', 'manga', 'pelajaran']
   console.log(buku[0])
// 2. Object tipe data untuk mendeskripsikan sebuah nilai
   let amir = {
    nama: "Amir",
    pekerjaan: "SE",
    mobil:[
       {
          brand:"honda",
          spek:{
             mesin:1000,
             kursi:{
                depan: 2,
                belakang: 3
             }
          }
       },
       {
          brand:"toyota",
          spek:{
             mesin:1300,
             kursi:{
                depan: 2,
                belakang: 0
             }
          }
       }
    ]
   }
   console.log(amir.mobil[1].spek.kursi.belakang)

   amir.mobil.forEach((e, i) => {
       console.log(i + 1)
       console.log(e)
   });
 //Temen2 punya mobil, mobil lebih dari satu dari berbagai merek
 //karena suka otomotif, temen2 deskripsikan setiap mobil yang temen2 punya

 //operator
 //1. matematika (*,/,-,+)
 let c = 1, 
     d = 2;
 console.log(c + d) //3
 //2. concat (mengabungkan 2 string) 
 console.log("Hello" + "world")
 //3. konversi
 let x = "1",
     y = "2"
 console.log(+x + +y)
 
 console.log(2 ** 4)

 console.log(y++)

 let n = 1
 n += 3 // n = n + 3
 console.log(n)
 n += 3 + 5
 console.log(n)
 x = (1+2, 3+4)
 console.log(x)

 // string
 // '',""
 let stringA = 'Amir'
 let stringB = 'udin'
 let stringC = stringA + "Namaku : " + stringA + stringB
 console.log(stringC)
 // string literal ``
 let stringD = `Namaku : ${stringB} Irsyad ${stringA}`
 console.log(stringD)