let punto = {
    x : 32,
    y : 12
};

let referencia = Object.assign(punto, {z : 21, x : 1});
let clon = Object.assign({}, punto, {z : 21, x : 1});

punto['r'] = 4;
console.log(punto, referencia)
console.log(punto, clon)

delete punto.r;

let copia = Object.assign({}, punto);
console.log(punto, copia)

let copiaObj = {...punto};
console.log(punto, copiaObj)