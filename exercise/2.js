function nilai(n){
    switch (true) {
        case n <= 60:
            return 'E'
        case n <= 70:
            return 'D'
        case n <= 80:
            return 'C'
        case n <= 90:
            return 'B'
        default:
            console.log('A')
            break;
    }
}

function nilaiB(n){
    switch (true) {
        case n > 90:
            return 'A'
        case n > 80:
            return 'B'
        case n > 70:
            return 'C'
        case n > 60:
            return 'D'
        default:
            return 'E'
    }
}

console.log(nilai(95))
console.log(nilai(76))

function rapor(n){
    return "Nilai : " + nilai(n)
}

console.log(rapor(95))