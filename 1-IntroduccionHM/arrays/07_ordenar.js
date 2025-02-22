const nombres = ["Juan", "María", "Carlos", "Ana", "Luis"];

nombres.sort()
console.log(nombres)

nombres.reverse()
console.log(nombres)

let letras = ['Y', 'a', 't', 'b', 'i']

letras.sort((a, b) => {
    //console.log(a)
    let a_lower = a.toLowerCase()
    let b_lower = b.toLowerCase()
    if (a_lower < b_lower) return -1
    if (a_lower > b_lower) return 1
    return 0
});

console.log(letras)