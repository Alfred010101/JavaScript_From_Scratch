function Usuario() {
    this.name = 'Jose'
    this.edad = 23
    this.logger = function(){
        console.log('logiando...')
    }
}


Usuario.prototype.login = function (){
    console.log('iniciando sesion', this.name)
    this.logger()
}

Usuario.prototype.toString = function (){
    console.log('Usuario', this.name)
}

const user1 = new Usuario()

for(let prop in user1){
    if(!user1.hasOwnProperty(prop))
        console.log(prop)
}

console.log(Object.keys(user1))