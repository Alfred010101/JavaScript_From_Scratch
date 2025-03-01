const usuarios = [
    {
        id: 1,
        nombre: "Juan Pérez",
        edad: 28,
        email: "juan.perez@example.com",
        activo: true
    },
    {
        id: 2,
        nombre: "María García",
        edad: 34,
        email: "maria.garcia@example.com",
        activo: false
    },
    {
        id: 3,
        nombre: "Carlos López",
        edad: 25,
        email: "carlos.lopez@example.com",
        activo: false
    },
    {
        id: 4,
        nombre: "Ana Martínez",
        edad: 30,
        email: "ana.martinez@example.com",
        activo: true
    }
];

let id_usuario = 3;

const resultado1 = usuarios.find((usuario) => { return usuario.id === id_usuario });
console.log(resultado1);

const resultado2 = usuarios.findIndex((usuario) => { return usuario.id === id_usuario && usuario.activo === true });
console.log(resultado2);