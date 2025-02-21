let arr1 = [1, 2];
let arr2 = [3, 4];

let combinados = arr1.concat(arr2);
console.log(combinados);

let dividido = combinados.slice(1, 2);
console.log(dividido);

console.log(combinados.slice(1));
console.log(combinados.slice())

console.log([0, ...arr1, ...arr2, 5, 6])

