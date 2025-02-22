function User(name, age){
    this.name = name;
    this.age = age;
    let log = function(){
        console.log("Login..." , name)
    }
    this.log = function(){
        log()
    }
}

const user = Object.seal(new User("Alfred", 23))
//const user2 = new User("Alfred", 23);

user.log();
user.pass = "hsdhf";
user.age = 24;
console.log(user)
