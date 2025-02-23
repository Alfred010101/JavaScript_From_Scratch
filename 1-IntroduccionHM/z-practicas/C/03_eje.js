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
        plan: 'gold'
    },
    {
        id: 3,
        nombre: 'Carlos López',
        edad: 25,
        email: 'carlos.lopez@example.com',
        activo: true,
        plan: 'gold'
    },
    {
        id: 4,
        nombre: 'Ana Martínez',
        edad: 30,
        email: 'ana.martinez@example.com',
        activo: true,
        plan: 'free'
    }
];

//console.log(usuarios.map(e => ({ ...e, 'plan': 'gold' })))

console.log(usuarios.filter(e => {
    return e.plan !== 'free'
}))