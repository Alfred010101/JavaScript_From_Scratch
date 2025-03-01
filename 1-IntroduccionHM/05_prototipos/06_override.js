
function Entidad(){}

Entidad.prototype.save = function () {
    console.log('guardando desde entidad...')
}

function User(){}
User.prototype.save = function () {
    console.log('guardando desde user...')
}

Object.setPrototypeOf(User.prototype, Entidad.prototype)

const user = new User()
user.save()

const u = new User()
Object.getPrototypeOf(Object.getPrototypeOf(u)).save()