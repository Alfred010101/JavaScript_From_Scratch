// Objetos, Funciones y Arreglos

function actualizarNombre() {
    return "Felipe";
}

function actualizarEdad() {
    return 23;
}

function colorFavorito(persona, color) {
    persona.colorFavorito = color
}

let objeto = {}
console.log(typeof objeto)

let persona = {
    nombre : "Juan",
    edad : 21,
    estudiante : true,
}

console.log(persona)

persona.nombre = actualizarNombre()
persona["edad"] = actualizarEdad()
console.log(persona)

let color = ["rojo", "negro", "verde", "morado"]

colorFavorito(persona, color[0])
console.log(persona)

