let form = document.createElement('form')
form.id = 'mi-formulario'

let input = document.createElement('input')
input.setAttribute('type', 'text')

let btn = document.createElement('button')
btn.innerText = 'Enviar'

form.append(input)
form.append(btn)

document.body.insertAdjacentElement('afterbegin', form)

form.onmouseenter = event => {
    console.log('Entra mouse', event)
}

form.onmouseleave = event => {
    console.log('Sale mouse', event)
}

input.onfocus = event => {
    console.log('Tiene el foco')
}

input.onblur = event => {
    console.log('Pierde el foco')
}

input.onchange = event => {
    console.log('Nuevo valor:', event.target.value)
}

// btn.onclick = event => {
//     event.preventDefault()
//     console.log('click')
// }

btn.addEventListener('click', event => {
    event.preventDefault()
    console.log('click')
})