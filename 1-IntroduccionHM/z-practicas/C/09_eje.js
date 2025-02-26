const users = [
    {
        id: 1,
        name: 'John Doe',
        age: 25,
        email: 'john.doe@example.com',
        active: true,
        plan: 'premium'
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 30,
        email: 'jane.smith@example.com',
        active: false,
        plan: 'gold'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        age: 22,
        email: 'alice.johnson@example.com',
        active: true,
        plan: 'free'
    },
    {
        id: 40,
        name: 'Bob Brown',
        age: 40,
        email: 'bob.brown@example.com',
        active: true,
        plan: 'premium'
    },
    {
        id: 5,
        name: 'Charlie Davis',
        age: 18,
        email: 'charlie.davis@example.com',
        active: false,
        plan: 'gold'
    },
    {
        id: 16,
        name: 'Eva Wilson',
        age: 28,
        email: 'eva.wilson@example.com',
        active: true,
        plan: 'free'
    }
];

const usuarios = [
    {
        id: 15,
        nombre: 'Juan Pérez',
        edad: 28,
        email: 'juan.perez@example.com',
        activo: false,
        plan: 'premium'
    },
    {
        id: 32,
        nombre: 'María García',
        edad: 34,
        email: 'maria.garcia@example.com',
        activo: true,
        plan: 'gold'
    },
    {
        id: 13,
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

function unificar(data_a, data_b) {
    return data_a.concat(data_b.map(u => ({
        id: u.id,
        name : u.nombre,
        age: u.edad,
        email: u.email,
        active: u.activo,
        plan: u.plan
    })))
    .sort((a, b) => {
        if (a.age > b.age) return 1;
        if (a.age < b.age) return -1;
        return 0;
    })
    .map(u => 
        `<li>Nombre: ${u.name}, Edad: ${u.age}</li>`
    )
}

const html = `<ul>
    ${unificar(users, usuarios).join(`
    `)}
</ul>
`
console.log(html)