//this dentro de un objeto: hace referencia al mismo objeto
const user = {
    name: 'Alfred',
    login(){
        console.log(this)
    }
}

user.logout = function (){
    console.log(this)
}

// user.logout()

//this en una funcion: hace referencia al objeto windows
function log(){
    console.log(this)
}

// log()

//this con new hace referencia al objeto, sin este refiere a obj windows
function Log(mensaje){
    this.menaje = mensaje
    console.log(this)
}
// Log('Hola Mundo')
// const l = new Log('Hola Mundo')



//contexto de this

const usuario = {
    nombre: 'Alfred',
    ciudadanias: ['A', 'B', 'C'],
    mostrarCiudades(){
        this.ciudadanias.forEach(ciudadania => {
            console.log(this.nombre, ciudadania)
        })
    }
}

// usuario.mostrarCiudades()


//cambio de contexto de this
function saludar(...rest){
    console.log(rest)
    console.log(this)
}

// saludar.call({propiedad: 'hola mundo'}, 1, 5)
// saludar.apply({propiedad: 'hola mundo'}, [1, 5])

// saludar.bind({propiedad: 'hola mundo'})(1, 5)

const usuario2 = {
    nombre: 'Alfred',
    ciudadanias: ['A', 'B', 'C'],
    mostrarCiudades(){
        this.ciudadanias.forEach(function (ciudadania) {
            console.log(this.nombre, ciudadania)
        }.bind(this))
    }
}

usuario2.mostrarCiudades()

