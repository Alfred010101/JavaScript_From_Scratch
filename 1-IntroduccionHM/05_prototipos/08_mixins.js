let vuela = {
    vuela(){
        console.log('volando')
    }
}

let nada = {
    nada(){
        console.log('nadando')
    }
}

let bano = {
    bano(){
        console.log('illedo al baño')
    }
}

let camina = {
    camina(){
        console.log('caminando')
    }
}

function mixin(Ctr, ...args){
    Object.assign(Ctr, ...args)
}

function Pato(){
    this.name = 'Patito'
}
mixin(Pato.prototype, nada, bano, camina, vuela)
console.log(Pato.prototype, new Pato())

function Perro(){}
mixin(Perro.prototype, nada, bano, camina)

function Pez(){}
mixin(Pez.prototype, nada, bano)
// console.log(Pez.prototype, new Pez())

function Avion(){}

Object.assign(Avion.prototype, vuela)
console.log(Avion.prototype, new Avion())