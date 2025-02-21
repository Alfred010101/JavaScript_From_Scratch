const letras = ['d', 'e'];

//agregar al final
letras.push('f', 'g');

//agregar al inicio
letras.unshift('a', 'b');

console.log(letras);

//agregar en indice especifico
letras.splice(2, 0, 4);

console.log(letras);

//eliminar al inicio
letras.shift();

//eliminar al final
letras.pop();

console.log(letras);

//eliminar indice y (no. de elemetos) especifico
letras.splice(2, 2);
console.log(letras);
