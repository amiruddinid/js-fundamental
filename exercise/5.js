function distance(str){
    return /a.{3}b/.test(str) ? 'YES' : 'NO';
}

console.log(distance('acdebae'))
console.log(distance('cdaecba'))

