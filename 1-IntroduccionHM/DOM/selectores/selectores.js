//HTMLElement
const id_elemet = document.getElementById('content')

//HTMLColection
const class_element = document.getElementsByClassName('red')

//NodeList
const name_element = document.getElementsByName('etiqueta')

//HTMLCollection
const parrafos = document.getElementsByTagName('p')

//Mas lentos

//HTMLElement <- solo un elemento
const el = document.querySelector("#content")

//NodeList
const els = document.querySelectorAll('p')

let plive = document.getElementsByTagName('p')
let pstatic = document.querySelectorAll('p')

console.log(plive, pstatic)

let nuevo = document.createElement('p')
document.body.append(nuevo)

console.log(plive, pstatic)
