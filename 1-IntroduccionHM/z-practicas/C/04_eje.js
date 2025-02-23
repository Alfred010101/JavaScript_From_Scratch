const usuarios = [
    {
        id: 1,
        nombre: 'Juan Pérez',
        edad: 28,
        email: 'juan.perez@example.com',
        activo: false,
        plan: 'premium'
    },
    {
        id: 2,
        nombre: 'María García',
        edad: 34,
        email: 'maria.garcia@example.com',
        activo: true,
        plan: 'free'
    },
    {
        id: 3,
        nombre: 'Carlos López',
        edad: 15,
        email: 'carlos.lopez@example.com',
        activo: true,
        plan: 'gold'
    },
    {
        id: 4,
        nombre: 'Ana Martínez',
        edad: 16,
        email: 'ana.martinez@example.com',
        activo: true,
        plan: 'free'
    }
];

//cantidad de usuarios premium
// console.log(usuarios
//     .filter(e => e.plan !== 'free')
//     .reduce((acc, e) => acc += 1, 0))

console.log(usuarios
    .reduce((acc, e) => (e.plan !== 'free') ? acc + 1 : acc, 0))

//usuarios mayores de edad
// console.log(usuarios
//     .filter(e => e.edad > 17)
//     .reduce((acc, e) => acc += 1, 0))
console.log(usuarios
    .reduce((acc, e) => {
        return (e.edad > 17) ? acc + 1 : acc
    }, 0))
