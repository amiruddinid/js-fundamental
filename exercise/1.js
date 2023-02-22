function ATM(x,y){
    if(x % 5 !== 0) return 'Jumlah saldo yang ditarik harus kelipatan 5!';

    if(y > x + 0.5){
        return y - x - 0.5
    }

    return 'Saldo Kurang'
}

console.log(solution(20, 100))
console.log(solution(42, 100))