let id;

function createDraggable(){
    let span = document.createElement('span')
    span.id = 'hola-mundo'
    span.innerText = 'Arrastrable'
    span.draggable = true
    span.ondragstart = event => {
        id = event.target.id
    }
    // document.body.append(span)
    return span
}

function createDropArea(){
    let dropArea = document.createElement('div')
    dropArea.className = 'drop'
    
    dropArea.ondragenter = event => {
        event.target.style.background = 'yellow'
    }
    
    dropArea.ondragleave = event => {
        event.target.style.background = ''
    }

    dropArea.ondragover = event => {
        event.preventDefault()
    }

    dropArea.ondrop = event => {
        event.target.appendChild(document.getElementById(id))
    }

    return dropArea
}


let draggable = createDraggable()
let dropArea1 = createDropArea()
let dropArea2 = createDropArea()

document.body.append(dropArea1)
document.body.append(dropArea2)
document.body.append(draggable)
