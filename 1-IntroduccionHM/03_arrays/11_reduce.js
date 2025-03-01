const numeros = [4, 2, 6, 7]

const suma = numeros.reduce((acc, e) => {
    return acc + e
}, 0)

console.log(suma)

const anidado = [[1, 6, 7], 5, [5, 4, 1]]
const plano = anidado.reduce((acc, e) => acc.concat(e), [])
console.log(plano)

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

const indexado = usuarios.reduce((acc, e) => ({
    ...acc,
    [e.nombre]: e,
}), {})

console.log(indexado)