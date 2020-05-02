//création 10 premières tuiles (boucle ?)

//création élément div building-cursor
export const store = document.getElementById('buildings')

//création div #building-cursor
let cursor = document.createElement('div')
cursor.id = 'building-cursor'
cursor.className = 'locked disabled'
store.appendChild(cursor)

//création élément icon
let iconCursor = document.createElement('div')
iconCursor.className = 'icon'
cursor.appendChild(iconCursor)

//création élément name
let nameCursor = document.createElement('div')
nameCursor.className = 'name'
nameCursor.innerHTML = 'Cursor' //(? doit être affiché dynamiquement)
cursor.appendChild(nameCursor)

//création élément cost
let costCursor = document.createElement('div')
costCursor.className = 'cost'
costCursor.innerHTML = 15 //(? doit être affiché dynamiquement)
cursor.appendChild(costCursor)

//création élément number
let numberCursor = document.createElement('div')
numberCursor.className = 'number'
cursor.appendChild(numberCursor)


//création div #building-grandma
let grandma = document.createElement('div')
grandma.id = 'building-grandma'
grandma.className = 'locked disabled'
store.appendChild(grandma)

//création élément icon
let iconGrandma = document.createElement('div')
iconGrandma.className = 'icon'
grandma.appendChild(iconGrandma)

//création élément name
let nameGrandma = document.createElement('div')
nameGrandma.className = 'name'
nameGrandma.innerHTML = 'Grandma' //(? doit être affiché dynamiquement)
grandma.appendChild(nameGrandma)

//création élément cost
let costGrandma = document.createElement('div')
costGrandma.className = 'cost'
costGrandma.innerHTML = 100 //(? doit être affiché dynamiquement)
grandma.appendChild(costGrandma)

//création élément number
let numberGrandma = document.createElement('div')
numberGrandma.className = 'number'
grandma.appendChild(numberGrandma)

