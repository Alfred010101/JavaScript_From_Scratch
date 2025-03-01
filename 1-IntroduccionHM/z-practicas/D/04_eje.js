function suma(fn, ...rest){
    fn(rest.reduce((acc, e) => acc + e))
}

suma(resultado => {
    console.log(resultado)
}, 1, 2, 3, 4)