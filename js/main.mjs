import Bakery from '../js/classes/bakery.mjs';
console.log(Bakery)

import Building from '../js/classes/building.mjs';
console.log(Building)

const myBakery = new Bakery();

//création 10 premières tuiles (boucle ?)

//création élément div building-cursor
const store = document.getElementById('store')

let cursor = document.createElement('div')
cursor.id = 'building-cursor'
cursor.class = 'locked disabled'
store.appendChild(cursor)

//création élément icon
let iconCursor = document.createElement('div')
iconCursor.class = 'icon'
cursor.appendChild(iconCursor)

//création élément name
let nameCursor = document.createElement('div')
nameCursor.class = 'name'
nameCursor.innerHTML = 'Cursor' //(? doit être affiché dynamiquement)
cursor.appendChild(nameCursor)

//création élément cost
let costCursor = document.createElement('div')
costCursor.class = 'cost'
costCursor.innerHTML = 15 //(? doit être affiché dynamiquement)
cursor.appendChild(costCursor)

//création élément number
let numberCursor = document.createElement('div')
numberCursor.class = 'number'
cursor.appendChild(numberCursor)


//création élément div building-grandma
let grandma = document.createElement('div')
grandma.id = 'building-grandma'
grandma.class = 'locked disabled'
store.appendChild(grandma)

//création élément icon
let iconGrandma = document.createElement('div')
iconGrandma.class = 'icon'
grandma.appendChild(iconGrandma)

//création élément name
let nameGrandma = document.createElement('div')
nameGrandma.class = 'name'
nameGrandma.innerHTML = 'Grandma' //(? doit être affiché dynamiquement)
grandma.appendChild(nameGrandma)

//création élément cost
let costGrandma = document.createElement('div')
costGrandma.class = 'cost'
costGrandma.innerHTML = 100 //(? doit être affiché dynamiquement)
grandma.appendChild(costGrandma)

//création élément number
let numberGrandma = document.createElement('div')
numberGrandma.class = 'number'
grandma.appendChild(numberGrandma)