//création 10 premières tuiles (boucle ?)

//création élément div building-cursor
const store = document.getElementById('store')

let cursor = document.createElement('div')
cursor.id = 'building-cursor'
cursor.class = 'locked disabled'
store.appendChild(cursor)

//création élément icon
let icon = document.createElement('div')
icon.class = 'icon'
cursor.appendChild(icon)

//création élément name
let name = document.createElement('div')
name.class = 'name'
name.innerHTML = 'Cursor' //(? doit être affiché dynamiquement)
cursor.appendChild(name)

//création élément cost
let cost = document.createElement('div')
cost.class = 'cost'
cost.innerHTML = 15 //(? doit être affiché dynamiquement)
cursor.appendChild(cost)

//création élément number
let number = document.createElement('div')
number.class = 'number'
cursor.appendChild(number)