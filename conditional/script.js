// Conditional / Decision making di JS
// 1. Ternary operator
// biasanya digunakan untuk menentukan hasil / nilai suatu variable
const online = true;
const isOnline = online ? true : false;

online ? console.log('online') : console.log('offline')

// jangan gunakan ternary seperti ini :
// online ? console.log('online') : 
//     offline <= 1 ? '1 Jam offline' : 
//     offline <= 10 ? '10 Jam offline' : 'Offline lama'

// 2. if, else, else if statement
if(online){
    alert('Online')
    console.log('online pada jam' + new Date().getTime())
}else{
    alert('Offline')
}

if(!online){
    alert('Online')
}else if(typeof offline === 'number'){
    alert('Offline '+ offline +' jam')
}else{
    alert('Offline')
}

// 3. switch case
const day = "monday";

switch(day){
    case "MONDAY":
        console.log("Hari Senin")
        break;
    case "TUESDAY":
        console.log("Hari Selasa")
        break;
    case "WEDNESDAY":
        console.log("Hari Rabu")
        break;
    case "THURSDAY":
        console.log("Hari Kamis")
        break;
    case "FRIDAY":
        console.log("Hari Jumat")
        break;
    case "SATURDAY":
        console.log("Hari Sabtu")
        break;
    case "SUNDAY":
        console.log("Hari Minggu")
        break;  
    default:
        console.log('Hari Kiamat')
}

switch(online){
    case true:
        console.log("Hari Senin")
        break;
    case typeof online === 'number':
        console.log("10 Jam Online")
        break;
    default:
        console.log('Hari Kiamat')
}

let nilai = 75;

if(nilai === 75){
    console.log('B')
}else if(nilai > 75){
    console.log('A')
}else{
    console.log('C')
}

switch(true){
    case nilai === 75:
        console.log("B")
        break;
    case nilai >= 75:
        console.log("A")
        break;
    default:
        console.log('C')
}