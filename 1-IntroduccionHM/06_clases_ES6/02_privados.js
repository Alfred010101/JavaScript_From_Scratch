class User{
    #name

    constructor(name){
        this.#name = name
    }

    #logger(){
        console.log('logger...')
    }
    
    getName(){
        this.#logger()
        return this.#name
    }

}

const u = new User('Alfred')
console.log(u.getName())