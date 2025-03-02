let element = document.createElement('p')

element.innerText = 'Hola Mundo!'
// element.innerHTML = '<ul><li>Elemento</li></ul>'
document.body.append(element)

element.style = 'background-color: red; font-weight: bold;'
element.className = 'parrafo'
element.id = 'mi_parrafo'

lement.setAttribute('prop', 'mi')
console.log(element.getAttribute('id'))
console.log(element.hasAttribute('style'))