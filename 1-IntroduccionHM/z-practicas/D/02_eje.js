const obj = {
    nombre: 'Alfred'
}

function extender(usuario){
    const metodos = {
        login(){
            console.log('Iniciando sesion', this.name)
        },
        logout(){
            console.log('Cerrando sesion', this.name)
        }
    }
    return Object.assign(usuario, metodos)
}


const usuario = extender(obj)

console.log(usuario)

usuario.login()
usuario.logout()