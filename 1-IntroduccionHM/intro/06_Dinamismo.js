const objeto = {id : 21};

objeto.name = "Alfred";
objeto.saludo = function(){console.log("Hola", objeto.name)}
objeto.edad = 23;

objeto.saludo();

delete objeto.edad;

console.log(objeto)

//no permite agregar, eliminar o modificar las propiedades del objeto
const user = Object.freeze({id : 2});
user.name = "Alfred";
user.id = 32;
console.log(user);

//no permite agregar, eliminar propiedades soloo modificar las propiedades del objeto
const user1 = Object.seal({id : 31});
user1.name = "Alfred";
user1.id = 32;
console.log(user1);