//création 10 premières tuiles (boucle ?)

import { buildings } from "../data.mjs"

//création élément div building
export const store = document.getElementById('buildings')

for (let i = 0; i < buildings.length; i++){
    let divTuile = document.createElement('div')
    divTuile.id = `building-${buildings[i].name.toLowerCase()}`
    divTuile.className = 'locked disabled'
    store.appendChild(divTuile)

    let iconTuile = document.createElement('div')
    iconTuile.className = 'icon'
    divTuile.appendChild(iconTuile)

    let nameTuile = document.createElement('div')
    nameTuile.className = 'name'
    nameTuile.innerHTML = buildings[i].name
    divTuile.appendChild(nameTuile)

    let costTuile = document.createElement('div')
    costTuile.className = 'cost'
    costTuile.innerHTML = buildings[i].cost
    divTuile.appendChild(costTuile)

    let numberTuile = document.createElement('div')
    numberTuile.className = 'number'
    divTuile.appendChild(numberTuile)

}


// //création div #building-grandma
// let grandma = document.createElement('div')
// grandma.id = 'building-grandma'
// grandma.className = 'locked disabled'
// store.appendChild(grandma)

// //création élément icon
// let iconGrandma = document.createElement('div')
// iconGrandma.className = 'icon'
// grandma.appendChild(iconGrandma)

// //création élément name
// let nameGrandma = document.createElement('div')
// nameGrandma.className = 'name'
// nameGrandma.innerHTML = 'Grandma' //(? doit être affiché dynamiquement)
// grandma.appendChild(nameGrandma)

// //création élément cost
// let costGrandma = document.createElement('div')
// costGrandma.className = 'cost'
// costGrandma.innerHTML = 100 //(? doit être affiché dynamiquement)
// grandma.appendChild(costGrandma)

// //création élément number
// let numberGrandma = document.createElement('div')
// numberGrandma.className = 'number'
// grandma.appendChild(numberGrandma)

