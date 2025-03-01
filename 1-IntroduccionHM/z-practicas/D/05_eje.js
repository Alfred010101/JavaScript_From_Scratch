function ordenar(txt, fn){
    let resultado = txt
    .split('')
    .filter(x => x !== ' ')
    .sort((a, b) => {
        let a_lower = a.toLowerCase()
        let b_lower = b.toLowerCase()
        if (a_lower < b_lower) return -1
        if (a_lower > b_lower) return 1
        return 0
    })
    .join('')

    fn(resultado)

    // fn([...txt.toLowerCase()].sort()
    //     .reduce((acc, el) => acc + el, ''))
}

ordenar('Hola Mundo', console.log)