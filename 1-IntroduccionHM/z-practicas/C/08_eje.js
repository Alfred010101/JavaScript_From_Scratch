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
        edad: 15,
        email: 'carlos.lopez@example.com',
        activo: true,
        plan: 'gold'
    },
    {
        id: 4,
        nombre: 'Ana Martínez',
        edad: 15,
        email: 'ana.martinez@example.com',
        activo: true,
        plan: 'free'
    }
];

function filter(arr) {
    return `<ul>${arr
        .filter(e => e.plan !== 'free')
        .sort((a, b) => {
            if (a.edad < b.edad) return 1;
            if (a.edad > b.edad) return -1;
            return 0;
        })
        .map(e => `<li>${e.nombre}</li>`)
        .join('')}</ul>`
}

console.log(filter(usuarios))

