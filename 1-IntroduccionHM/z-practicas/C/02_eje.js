//en un objeto clasificar por tipos de datos un arreglo
//cada tipo de dato estara como propiedad
function classify(arr) {
    return {
        number: arr.filter((element) => typeof element === 'number'),
        string: arr.filter((element) => typeof element === 'string'),
        object: arr.filter((element) => typeof element === 'object')
    }
}

let arr = ["Alfred", 32, "Mundo", {}, 54, { id: 423 }, [3, 67]]
console.log(classify(arr))
console.log(typeof arr[2])
