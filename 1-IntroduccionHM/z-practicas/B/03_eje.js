//Comparar objetos
function compare(obj1, obj2) {
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(compare({ name: 'Luis', edad: 32 },
    { name: 'Alfred', edad: 32 }));