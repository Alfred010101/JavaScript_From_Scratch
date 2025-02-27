function sum(a, b, ...rest){
    console.log(rest)
}

sum(3, 5, 7, 9, 4)


const logMsg = (des, ...msgs) => {
    for (const msg of msgs) {
        console.log(des, msg)
    }
}

let msgs = ['Tipo A', 'Tipo B', 'Tipo C']
logMsg("Servido", ...msgs)