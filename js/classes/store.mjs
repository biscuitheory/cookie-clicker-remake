//création 10 premières tuiles (boucle ?)

import { buildings } from "../data.mjs"

import Building from './building.mjs';
console.log(Building)

//création élément div building
export const store = (bakery) => {
const store = document.getElementById('buildings')
//information des buildings

// let numberTuile = document.getElementsByClassName('number')
// numberTuile.innerHTML = myBuilding.number
// console.log(myBuilding.number)

for (let i = 0; i < bakery.buildings.length; i++){
    let divTuile = document.createElement('div')
    divTuile.id = `building-${bakery.buildings[i].name.toLowerCase()}`
    divTuile.className = 'locked disabled'
    store.appendChild(divTuile)

    let iconTuile = document.createElement('div')
    iconTuile.className = 'icon'
    divTuile.appendChild(iconTuile)

    let nameTuile = document.createElement('div')
    nameTuile.className = 'name'
    nameTuile.innerHTML = bakery.buildings[i].name
    divTuile.appendChild(nameTuile)

    let costTuile = document.createElement('div')
    costTuile.className = 'cost'
    costTuile.innerHTML = bakery.buildings[i].cost
    divTuile.appendChild(costTuile)

    let numberTuile = document.createElement('div')
    numberTuile.className = 'number'
    numberTuile.innerHTML = bakery.buildings[i].number
    divTuile.appendChild(numberTuile)
    console.log(numberTuile.innerHTML)

    if (bakery.buildings.length - 3 > i) {
        divTuile.style.display = 'flex'
    } else {
        divTuile.style.display = 'none'
    }

    divTuile.addEventListener('click', () => {
        if (divTuile.className == "unlocked enabled") {
        bakery.buildings[i].buy()
        divTuile.querySelector('.number').innerHTML = bakery.buildings[i].number
        divTuile.querySelector('.cost').innerHTML = bakery.buildings[i].cost
     }
    })

} 
}

// for (let i = 0; i < buildings.length-1; i++){
//     let divTuile = document.getElementById(`building-${buildings[i].name.toLowerCase()}`)
//     let numberTuile = document.getElementsByClassName('number')
//     numberTuile.style.display = 'none'
//     if (divTuile.className = "unlocked enabled"){
//         divTuile.addEventListener('click', (e) => {
//         Building.buy()


//     })
// }
// }





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

