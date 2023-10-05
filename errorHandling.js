class CustomError extends Error{
    constructor(message, code){
        super(message)
        this.name = "this.name"

        //buat sendiri
        this.object = {
            status: "Error",
            code: code,
            message: message
        }
    }
}

function sayHello(){}

try {
    sayHello('welcome')
    throw new CustomError('Not Found', 404)
} catch (error) {
    if(error instanceof CustomError){
        console.log('CustomError:', error)
    }else{
        console.error('error:', error)
    }
}

// Buatlah fungsi takeOff(altitude) yang menerima altitude sebagai ketinggian penerbangan dalam meter.
// Kemudian, lakukan langkah-langkah berikut:
// - Jika altitude lebih dari 10000, lemparkan error dengan pesan "Ketinggian terlalu tinggi!".
// - Jika altitude negatif, lemparkan error dengan pesan "Ketinggian tidak valid!".
// - Jika altitude valid (antara 0 hingga 10000), kembalikan pesan "Pesawat lepas landas menuju ketinggian " + altitude + " meter."
// Buatlah fungsi flightSimulation(altitude) yang memanggil takeOff(altitude) dan menangani error yang mungkin muncul. 
// Gunakan try...catch untuk menangkap error.
// Panggil flightSimulation(12000) dan tangkap pesan error yang mungkin muncul. Tampilkan pesan error di konsol.
// Panggil flightSimulation(-500) dan tangkap pesan error yang mungkin muncul. Tampilkan pesan error di konsol.
// Panggil flightSimulation(8000) dan tangkap pesan keluaran. Jika tidak ada error, tampilkan pesan hasil di konsol.

