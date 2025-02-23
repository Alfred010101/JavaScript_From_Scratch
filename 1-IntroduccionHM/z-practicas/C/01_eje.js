//valor absoluto

function absoluto(arr) {
    return arr.map((e) =>
        Math.abs(e)
    )
}

const ns = [-4, 5, 6, -3, -7, 2, -12]

console.log(absoluto(ns))