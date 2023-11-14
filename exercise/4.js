function count(n){
    let sum = 0
    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum

    //
    // let num = n.split();
    // let sum = 0
    // num.forEach(e => sum += Number(e));

    // return sum
}

console.log(count(2022))
