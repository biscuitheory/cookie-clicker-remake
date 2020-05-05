//création 10 premières tuiles (boucle ?)

import { buildings } from "../data.mjs"

import Building from './building.mjs';
console.log(Building)

//création élément div building
export const store = (bakery) => {
const store = document.getElementById('buildings')

//information des buildings
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

    // Achat d'un bâtiment de type Cursor
    divTuile.addEventListener('click', () => {
        if (divTuile.className == "unlocked enabled") {
        // jouer le son clic
        let playBuySound = document.createElement('audio')
        playBuySound.src = `assets/sounds/buy${(Math.floor(Math.random() * 4) + 1)}.mp3`
        divTuile.appendChild(playBuySound) //un enfant est crée à chaque clic
        playBuySound.play()
        
        // Condition achat : uniquement si compte cookies > cout d'un batiment
        if (bakery.cookies >= bakery.buildings[i].cost){
        // pour faire apparaître le nombre de batiments achetés
        divTuile.querySelector('.number').style.display = 'flex'
        // applique la methode buyBuilding à la tuile sur laquelle on clique
        bakery.buyBuilding(bakery.buildings[i])
        // pour afficher dynamiquement sur la page le nombre de batiments achetés, le cout et le stock cookies
        divTuile.querySelector('.number').innerHTML = bakery.buildings[i].number
        divTuile.querySelector('.cost').innerHTML = bakery.buildings[i].cost
        document.getElementById('cookiesStock').querySelector('span').innerHTML = bakery.cookies
        document.getElementById('cookiesPerSecond').querySelector('span').innerHTML = bakery.cookiesPerSecond
        }
    
        }

    })
} 
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

