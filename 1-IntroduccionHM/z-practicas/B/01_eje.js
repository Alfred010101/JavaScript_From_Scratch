//Crear usuarios usando una funcion constructora
function User(name) {
    this.id = Math.floor(Math.random() * (100 + 1));
    this.name = name;
}

let user_a = new User('Alfred');
let user_b = new User('Arista');

console.log(user_a, '\n', user_b);