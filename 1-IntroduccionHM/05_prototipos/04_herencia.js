function User(){
    this.name = 'Hola Mundo'
}

function Product(){
    this.name = 'Product'
}

function Entidad(){}

Entidad.prototype.save = function () {
    console.log('guardando...', this.name)
}

Entidad.prototype.validate = function () {
    console.log('validando...', this.name)
}

// Erencia simple pero se pierden costructores
// User.prototype = Entidad.prototype
// User.prototype.constructor = User

// Para mantener los constructores 
// User.prototype = Object.create(Entidad.prototype)
// User.prototype.constructor = User

// Mejor forma de implementar herencia
Object.setPrototypeOf(User.prototype, Entidad.prototype)
Object.setPrototypeOf(Product.prototype, Entidad.prototype)

const user = new User()
const product = new Product()

console.log(user)
console.log(product)