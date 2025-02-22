//mostrar cuales son sus metodos
function what_are_methods(object) {
    for (const key in object) {
        if (typeof (object[key]) === 'function') {
            console.log(key)
        }

    }
}

let object = {
    id: 1,
    name: 'Alfred',
    login: function () { },
    logout: function () { }
}

what_are_methods(object);