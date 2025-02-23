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
        edad: 15,
        email: 'ana.martinez@example.com',
        activo: true,
        plan: 'free'
    }
];

function groupBy(arr, prop) {
    return arr.reduce((acc, e) => {
        let key = e[prop]
        acc[key] = (acc[key]) ? acc[key] : []
        acc[key].push(e)
        return acc
    }, {})
}

console.log(groupBy(usuarios, 'activo'))