function crearUsuario(nombre, correo){
    return {
        nombre,
        edad : 23,
        correo,
        direccion : {
            calle : 'Calle A',
            numero : 789,
        },
        accion : function () {
            console.log('Hola')
        }
    }
}

let userA = crearUsuario('Felipe', 'felipe@gmail.com')
console.log(userA)

let userB = crearUsuario('Andrea', 'andrea@gmail.com')
console.log(userB)