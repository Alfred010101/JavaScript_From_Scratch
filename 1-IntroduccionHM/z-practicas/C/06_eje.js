function classify(arr) {
    return arr.reduce((acc, e) => {
        let key = typeof e
        acc[key] = acc[key] ? acc[key] : []
        acc[key].push(e)
        return acc
    }, {})
}

let arr = ["Alfred", 32, "Mundo", {}, 54, { id: 423 }, [3, 67]]
console.log(classify(arr))