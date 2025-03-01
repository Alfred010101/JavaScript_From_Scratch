function hola() {
    return 'Hola Mundo 1';
}

const resultado = hola();

/* const saludo = () => {
    return 'Hola Mundo 2';
} */

const saludo = () => 'Hola Mundo 2';

console.log(resultado);
console.log(saludo());

console.log(((mensaje) => { mensaje + ';' }, "Bienvenido, eres tremendo..."));