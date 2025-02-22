//factory function
function user(name) {
    return {
        id: Math.floor(Math.random() * (100 + 1)),
        name
    }
}

let user_a = user('Alfred');
let user_b = user('Arista');

console.log(user_a, '\n', user_b);