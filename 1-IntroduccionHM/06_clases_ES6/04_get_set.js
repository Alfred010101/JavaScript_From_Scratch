class Restaurante{
    #name
    constructor(name){
        this.#name = name
    }

    get name(){
        return this.#name
    }

    set name(name){
        this.#name = name
    }

    static getRestauarante(id){
        return new Restaurante('returned')
    }
}

const r = Restaurante.getRestauarante(32)
r.name = 'Comedor'
console.log(r.name)
