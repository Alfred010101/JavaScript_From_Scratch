const ahora = new Date()
console.log(ahora)

//formato de fecha EEUU
//mes / dia / año

const fecha = new Date('October 21 2001 15:53 GMT-0300')
console.log(fecha)

const fecha2 = new Date(1999, 11, 27, 14, 15)
const fecha3 = new Date(1999, 11, 27, 14+15, 15)

console.log(fecha2)
console.log(fecha3)
console.log(fecha.toDateString())
console.log(fecha.toISOString())
console.log(fecha.toTimeString())
console.log(fecha.getDay())