//objeto vacio
var user = {};
console.log("Objeto User : ", user);

//agregando atributos a un objeto vacio
user.nombre = "Juan";
user.edad = 21;
console.log("Objeto User : ", user);

//creando un objeto con atributos
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log("Objeto Tabla : ", table);
console.log("Atributo del Objeto Tabla : ",table.color);

//creando un objeto con atributos
var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}
console.log("Objeto House : ", house);
house.windows = 4;
console.log("Objeto House : ", house);