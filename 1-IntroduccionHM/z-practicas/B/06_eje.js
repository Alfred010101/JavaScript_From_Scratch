//crear copias de objetos, sin usar funciones de js
function copy(object) {
    let copy = {}
    for (let key in object) {
        copy[key] = object[key]
    }
    return copy
}

let object = {
    id: 1,
    name: 'Alfred',
    login: function () { },
    logout: function () { }
}

console.log(copy(object))