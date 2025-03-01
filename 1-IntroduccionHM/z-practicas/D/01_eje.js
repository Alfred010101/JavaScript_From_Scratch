const obj = {
    nombre: 'Alfred'
}

function Extender(){
    this.login = () => {
        console.log("Logeando al usuario", this.name)
    }

    this.logout = () => {
        console.log("Cerrando al usuario", this.name)
    }
}

Extender.call(obj)

console.log(obj)

obj.login()
obj.logout()