let element = document.createElement('p')
element.innerText = 'Elemento creado'

document.body.append(element)
element.remove()
document.body.prepend(element)

let div = document.createElement('div')
div.innerText = 'Soy un div'
element.replaceWith(div)

document.body.replaceChild(element, div)
document.body.removeChild(element)
document.body.appendChild(element)

document.body.insertBefore(div, element)

let beforebegin = document.createElement('p')
beforebegin.innerText = 'beforebegin'

let beforeend = document.createElement('p')
beforeend.innerText = 'beforeend'

let afterbegin = document.createElement('p')
afterbegin.innerText = 'afterbegin'

let afterend = document.createElement('p')
afterend.innerText = 'afterend'

document.body.insertAdjacentElement('beforebegin', beforebegin)
document.body.insertAdjacentElement('beforeend', beforeend)
document.body.insertAdjacentElement('afterbegin', afterbegin)
document.body.insertAdjacentElement('afterend', afterend)

// document.body.insertAdjacentHTML('afterbegin', afterbegin)
// document.body.insertAdjacentText('tedjsadlk')