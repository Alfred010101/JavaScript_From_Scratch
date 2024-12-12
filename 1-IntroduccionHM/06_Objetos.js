const yo = {
    nombre : 'Alfredo',
    edad : 23,
    direccion : {
        calle : 'Calle A',
        numero : 213
    },
    accion : function () {
        console.log('Tengo ', this.edad)
    }
}

yo.accion()
yo.miColor = 'black'
console.log(yo)