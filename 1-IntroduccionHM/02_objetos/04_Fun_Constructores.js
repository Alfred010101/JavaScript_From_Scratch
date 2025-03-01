function Usuario(name){
    this.name = name
}

console.log(Usuario.name)
console.log(Usuario.length)

const U = Usuario

let usuario = new U('Alfredo')
console.log(usuario)

function of(Fn, arg){
    return new Fn(arg)
}

let usuario2 = of(U, 'Alfredo')
console.log(usuario2)

function returned(){
    return function(){
        console.log('Hola Mundo')
    }
}

let saludar = returned()
saludar()