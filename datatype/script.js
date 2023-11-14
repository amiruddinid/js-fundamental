// Data Type / Tipe Data - Tipe data yang tersedia di JS :
// primitif : tipe data yang tidak bisa menampung lebih dari satu nilai
// 1. String - Ditandai oleh "" / '' / ``
const str = "String";
// 2. Number - berisi angka 0123456789, tidak bisa di awali angka 0
const num = 10;
// 3. Boolean - berisi nilai benar / salah (true / false) 
const bool = true
// 4. Null - nilai kosong
const kosong = null
// 5. Undefined - variable dengan nilai yang belum terdefiniskan
let undef

// non-primitif : tipe data yang bisa berisi banyak data
// 1. Object -> untuk menyimpan nilai yang bersifat deskriptif
const avanza = {
    plat: 'B 1234 FSW',
    warna: 'Silver',
    tahun: '2004',
    tipe: 'MPV'
}
// Mengakses object
console.log(avanza.plat)
console.log(avanza[tipe])
// mengganti isi object
avanza.tahun = '2013'
console.log(avanza.tahun)
// dan masih banyak operasi yang bisa kita gunakan untuk object

// Object ditandai oleh {}
// object memiliki key -> sebelah kiri tanda :, sebagai penamaan data
// nilai -> sebelah kanan tanda :, sebagai isi / nilai dari data 
// Trivia : semua aspek yang ada di JS adalah object

// 2. Array -> untuk menyimpain nilai / data yang bersifat list / daftar
const cars = ['Avanza', 'Xenia', 'Brio', 'Creta', 'Ioniq']

// Array ditandai oleh []
// Untuk mengakses data array memerlukan index
// index / indeks adalah penamaan / penomoran data di array dimulai dari 0

console.log(cars[1]) //Xenia
console.log(cars[3]) //Creta

//menganti data di array
cars[0] = 'Yaris'
console.log(cars[0]) //Yaris

// kita bisa melakukan penghapusan data, filter, search, sort, penambahan data di array

const computer = {
    processor: 'Intel',
    ram: '16gb',
    bluetooth: true,
    wifi: true,
    ssd: {
        totalCapacity: 1024,
        nvme: true,
    },
    monitor: ['Samsung 37inch', 'Mi Monitor 24inch']
}

console.log(computer.ssd.nvme)
console.log(computer.monitor[1])

const motor = [
    {
        nama: 'Mio',
        cc : 110,
        bensin: 'premium',
        pajakHidup: true
    },
    {
        nama: 'Beat',
        cc : 110,
        bensin: 'pertalite',
        pajakHidup: true
    },
    {
        nama: 'CB',
        cc : 150,
        bensin: 'premium',
        pajakHidup: false
    }
]

console.log(motor[1].nama)