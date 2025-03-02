let validate = data => {
    let errors = {}
    if(!data.name)
        errors.name = 'Campo obligatorio'
    if(!data.lastname)
        errors.lastname = 'Campo obligatorio'
    return errors
}

let render = ({data, errors}) => {
    return `
    <form name="formulario">
        <div>
            <label for="name">Nombre:</label>
            <input name="name" value="${data.name}">
            ${errors.name || ''}
        </div>
        <div>
            <label for="lastname">Apellido:</label>
            <input name="lastname" value="${data.lastname}">
            ${errors.lastname || ''}
        </div>
        <div>
            <button>Enviar</button>
        </div>
    </form>
    `
}

let inicialValues = {
    name: '',
    lastname: ''
}

let flagToErros = 0

let form = document.createElement('form')
form.innerHTML = render({data:inicialValues, errors: {}})
document.body.append(form)

form.addEventListener('submit', event => {
    event.preventDefault()
    let data = Array.from(event.target.elements)
        .reduce((acc, el) => {
            if(!el.name)
                return acc
            acc[el.name] = el.value
            return acc
        }, {})

    const errors = validate(data)
    
    if(Object.keys(errors).length > 0 || flagToErros > 0){
        flagToErros = Object.keys(errors).length
        let html = render({errors, data})
        form.innerHTML = html
        return
    }
        
})