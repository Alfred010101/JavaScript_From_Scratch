const usuario = {
    nombre:"Nose",
    apellido: "No",
    get nombreCompleto(){
        return `${this.nombre}, ${this.apellido}`
    },
    set setNombre(nombre){
        this.nombre = nombre
    }
}

usuario.setNombre = 'Juan'
console.log(usuario.nombreCompleto)