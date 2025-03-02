class Restaurante{
    #name
    constructor(name){
        this.#name = name
    }

    getName(){
        return this.#name
    }

    static getRestauarante(id){
        return new Restaurante('returned')
    }
}

const r = Restaurante.getRestauarante(32)

console.log(r.getName())
