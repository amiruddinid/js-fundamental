function ip(str){
    const titik = str.split('.') // ['1','1','1','1']
    return titik.join('()') // '1()1()1()1'
}

// ['1','1','1','1']
console.log('1.1.1.1')
console.log('192.168.1.1')