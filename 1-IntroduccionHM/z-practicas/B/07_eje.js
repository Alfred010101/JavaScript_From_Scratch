//agregar propiedades

function agregarId(object) {
    if (typeof object === 'object') {
        object.id = Math.floor(Math.random() * (100 + 1))
    }
}

let object = {
    name: 'Alfred',
    login: function () { },
    logout: function () { }
}

agregarId(object)
console.log(object)