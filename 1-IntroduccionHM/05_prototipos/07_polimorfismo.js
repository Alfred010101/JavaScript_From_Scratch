function Select (){}

Select.prototype.render = function(){
    console.log('renferizando select')
}

function Checkbox (){}

Checkbox.prototype.render = function(){
    console.log('renferizando checkbox')
}

const components = [
    new Select(),
    new Checkbox()
]

components.forEach((c)=> c.render())