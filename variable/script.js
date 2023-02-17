// Variable / variabel di Javascript
// Variable berfungsi untuk menyimpan sebuah nilai / value di JS

// var -> Jadul, jangan dipakai karena beresiko untuk menimbulkan bug
// Sifat
// 1. function-scoped / local-scoped or global-scoped : bisa diakses diluar scope / {}  (kurung kurawal)
if (true) {
  var test = "betul"; // use "var"
}
console.log('var : '+ test); // betul, variable bisa diakses diluar if

// 2. Bisa di deklarasi ulang
var user = "Pete";
var user = "John"; // this "var" does nothing (already declared)
// ...tidak men-trigger error

console.log('deklarasi ulang :' + user); // John

// 3. Hoisting - var bisa di deklarasi di bawah penggunaanya
// variabel didefinisikan dari awal fungsi bekerja dimanapun variabel itu berada
// (dengan asumsi bahwa definisi tersebut tidak ada dalam fungsi bersarang).
phrase = "Hello";
alert(phrase);
var phrase;

// sama dengan :
// var phrase;
// phrase = "Hello";
// alert(phrase);

// Daripada var, gunakan let kalau mau membuat variable yang nilainya berubah2
// dan const kalau nilainya selalu tetap 

// let & const
// 1. block scoped : tidak bisa diakses diluar scope / {}  (kurung kurawal)
if (true) {
  let letTest = true; // use "let"
}
  
console.log('let : '+ letTest); // ReferenceError: letTest is not defined

if (true) {
  const conTest = true; // use "const"
}
  
console.log('let : '+ conTest); // ReferenceError: conTest is not defined

// 2. Tidak Bisa di deklarasi ulang
let nama = "Pete";
let nama = "John"; // SyntaxError: 'nama' has already been declared
// men-trigger error

const red = "RED";
const red = "red"; // SyntaxError: 'red' has already been declared
// men-trigger error

console.log('deklarasi ulang :' + nama, red); // John

// 3. tidak bisa Hoisting - tidak bisa di deklarasi di bawah penggunaanya

phraseLet = "Hello";
alert(phraseLet); // Cannot access 'phraseLet' before initialization
let phraseLet; // undefined

phraseConst = "Hello";
alert(phraseConst); // Cannot access 'phraseConst' before initialization
let phraseConst; // undefined