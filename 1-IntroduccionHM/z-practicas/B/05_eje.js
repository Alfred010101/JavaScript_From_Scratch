//saber si un objeto cuenta con una propiedad especifica
function is_property(object, property) {
    for (const key in object) {
        if (key == property) {
            return true
        }
    }
    return false
}

let object = {
    id: 1,
    name: 'Alfred',
    login: function () { },
    logout: function () { }
}
let property = 'address'
console.log(is_property(object, property))