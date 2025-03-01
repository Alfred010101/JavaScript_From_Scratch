const usuarios = [
    {
        id: 1,
        nombre: "Juan Pérez",
        edad: 28,
        email: "juan.perez@example.com",
        activo: false
    },
    {
        id: 2,
        nombre: "María García",
        edad: 34,
        email: "maria.garcia@example.com",
        activo: true
    },
    {
        id: 3,
        nombre: "Carlos López",
        edad: 15,
        email: "carlos.lopez@example.com",
        activo: true
    },
    {
        id: 4,
        nombre: "Ana Martínez",
        edad: 30,
        email: "ana.martinez@example.com",
        activo: true
    }
];

const mayores = usuarios.filter(u => u.edad > 17)
console.log(mayores)

