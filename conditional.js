//if
let tahun = prompt("Tahun berapa indonesia merdeka ?")
console.log(typeof tahun);
// === equal strict / akan mengecek nilai dan juga tipe data
// == equal not strict / akan mengecek nilai tanpa tipe data yang sama
// !== not equal strict / akan mengecek nilai dan juga tipe data
// != not equal not strict / akan mengecek nilai tanpa tipe data yang sama
// >, <, >=, <= 

// if(tahun == 1945) alert("Merdeka! Merdeka!")

// if(tahun == 1945) {
//     alert("Merdeka! Merdeka!")
//     alert("Merdeka!")
// }

if(telur === "1000"){
    alert("Merdeka! Merdeka!")
}else if(tahun > "1945"){
    alert("Ayo Maju!")
}else if(tahun > "1945"){
    alert("Ayo Maju!")
}else{
    alert("Salah bro!")
}

//ternary operator ?
let age = 17
let ktp = age >= 18 ? 'punya' : 'tidak punya'
// kondisi ? hasil kalau benar : hasil kalau salah
console.log(ktp)

//switch case
// switch (tahun) {
//     case '1945':
//         alert('benar sekali!')
//         break;
//     case tahun < 1945: //hasil perbandingan adalah true maka ≠ tahun
//         alert('kurang bro!')
//         break;
//     default:
//         alert('Salah')
//         break;
// }

switch (true) {
    case tahun == 1945:
        alert('benar sekali!')
        break;
    case tahun < 1945:
        alert('kurang bro!')
        break;
    case tahun > 1945: //hasil perbandingan adalah true maka ≠ tahun
        alert('kelebihan!')
        break;
    default:
        alert('Salah')
        break;
}

//
// 1. if digunakan untuk perbandingan yang complex dan kondisinya tidak cukup banyak
// 2. switch digunakan untuk perbandingan yang langsung mengecek value dan kondisinya cukup banyak
