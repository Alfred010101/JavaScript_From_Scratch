class User{
    constructor(name){
        this.name = name
        this.instancia = function(){}
    }

    activo = true

    log = () => { }

    login(){
        console.log('Hola Mundo')
    }
}

const u = new User('Alfred')
console.log(u)