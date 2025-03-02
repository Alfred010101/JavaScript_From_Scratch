const Entidad = {
    save(){
        console.log('save en Entidad')
    }
}

const Actualizar = {
    update(){
        console.log('actualizando en Entidad')
    }
}

class User{

    constructor(name){
        this.name = name
    }

    save(){
        console.log('save en Usuario')
    }
}

// Object.assign(User.prototype, Entidad)
const nuevoProto = Object.assign({}, Entidad, Actualizar)
Object.setPrototypeOf(User.prototype, nuevoProto)

const u = new User('Alfred')
u.save()
u.update()