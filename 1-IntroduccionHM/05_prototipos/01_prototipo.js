let obj = {}
let objeto = new Object()

console.log(Object.getPrototypeOf(obj) === Object.prototype)
console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(objeto))

console.log(Object.getPrototypeOf(obj))