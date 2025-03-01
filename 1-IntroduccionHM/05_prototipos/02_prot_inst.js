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
user1.toString()