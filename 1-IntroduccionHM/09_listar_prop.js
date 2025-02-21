const punto = {
    x : 32,
    y : 43,
    dibujar(){
        console.log('dibujando...');
    }
}

//delete punto.dibujar;

if ('dibujar' in punto){
    punto.dibujar();
}

console.log(Object.keys(punto));

for (const key of Object.keys(punto)) {
    console.log(key, punto[key])
}

for (const entry of Object.entries(punto)) {
    console.log(entry)
}

//Es mejor usar esta opcion
for (const key in punto) {
    console.log(key, punto[key])
}