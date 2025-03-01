function sum(arr){
    if(!Array.isArray(arr)){
        throw new Error('El parametro no es un arreglo')
    }
    return arr.reduce((acc, el) => {
        if(typeof el !== 'number' || Number.isNaN(el)){
            throw new Error(`Elemento ${el} no es un numero`)
        }
        return acc + el
    })
}

try{
    console.log(sum([23, 634, NaN]))
}catch(e){
    console.log(e.message)
}