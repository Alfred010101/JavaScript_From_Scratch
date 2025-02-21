function Usuario() {
    this.name = 'Jose'
    this.edad = 23
}

let usuario = new Usuario();

console.log(usuario)

const obj1 = new Object()
console.log(obj1.constructor)

const obj2 = {}
console.log(obj2.constructor)

let str1 = new String('1 + 1');
let str2 = '1 + 1';
console.log(eval(str1.valueOf()), eval(str2))