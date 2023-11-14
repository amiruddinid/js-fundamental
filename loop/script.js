// looping
// mengulangi hal yang sama berulang kali sampai sebuah kondisi tercapai

// 1. for

// for (inisialisasi; kondisi; pengubah nilai) {
// kodingan yang akan di ulang2
    
// }

const initialFloor = 1;

for(
    let floorLevel = initialFloor;
    floorLevel <= 5;
    floorLevel++
){
    console.log("Aku lagi di lantai" + floorLevel)
    console.log("ngepel")
    console.log("meres pel")
    console.log("ngepel lagi")
}

//while

let i = 1;
while(i <= 5){
    console.log("Aku lagi di lantai" + i)
    console.log("ngepel")
    console.log("meres pel")
    console.log("ngepel lagi")
    i++;
}

//do while

do {
    console.log("Aku lagi di lantai" + i)
    console.log("ngepel")
    console.log("meres pel")
    console.log("ngepel lagi")
    i++;
} while (i <= 5);


// Looping khusus untuk array
// foreach
// map
// for
// filter
// sort
// find
