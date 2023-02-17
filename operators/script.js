// Basic operator / arimatika / matematika
// Terms
// Operan : adalah objek operasi matematika, yaitu objek atau kuantitas yang dioperasikan.
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