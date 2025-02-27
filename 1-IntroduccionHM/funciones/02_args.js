function suma(a, b){
    return Array.from(arguments)
    .reduce((a, b) => {return a + b})
}

console.log(suma(2, 4, 6, 8))