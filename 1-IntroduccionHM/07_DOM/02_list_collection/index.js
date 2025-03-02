let collection = document.getElementsByTagName('p')
let list = document.querySelectorAll('p')

console.log(collection, list)

//Collection no tiene metodos para iterarlos
let item1 = collection.namedItem('p3')
let item2 = collection.item(2)
let item3 = collection[2]


for (const element of collection) {
    console.log(element)
}

Array.from(collection)
    .forEach(x => console.log(x))


let ite1 = list.item(2)
let ite2 = list[2]

list.forEach(x => console.log(x))

let entries = list.entries()
let keys = list.keys()
let values = list.values()

console.log("Entries:");
for (let entry of entries) {
    console.log(entry);
}

console.log("Keys:");
for (let key of keys) {
    console.log(key); 
}

console.log("Values:");
for (let value of values) {
    console.log(value); 
}



