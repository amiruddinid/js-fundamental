User Story:

Temen2 mau beli nasi goreng, tapi kalau nasi gorengnya habis temen2 beli Bakmie,
tapi kalau nasi goreng nya ada temen2 minta beli nasi gorengnya yang pedes

Challenge : buat flow-chart dan pseudo-code dari user-story diatas
    coba modifikasi cerita diatas / tambahkan kondisi yang teman2 inginkan


draw.io
notepad / vscode

READ menu
SELECT FROM menu and save to ORDER
IF (ORDER) is nasi goreng and nasi goreng not null
    THEN INPUT yang pedas
ELSE SELECT ORDER
PROCESS ORDER
OUTPUT FOOD

BACA menu
ORDER = menu
JIKA (ORDER) adalah nasi goreng dan nasi goreng tersedia
    MAKA INPUT yang pedas
JIKA TIDAK pesan bakmie dan simpan ke ORDER
MASAK ORDER
BUNGKUS masakan

const menu = ['Nasi Goreng', 'Bakmie', 'Capjay']
const order = menu[0]

function process(order){
    let input;
    if(order === 'Nasi Goreng' && rice !== null){
        input = 'Yang pedas'
    }

    const masakan = masak(order, input)
    return bungkus(masakan);
}