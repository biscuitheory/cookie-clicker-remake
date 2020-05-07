import { buildings } from "../data.mjs"

import Building from '../classes/building.mjs';
console.log(Building)

// Création élément div container des batiments
export const store = (bakery) => {
const store = document.getElementById('buildings')

    // Création 10 premières tuiles via une boucle
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

        // Gérer l'affichage des tuiles mode unlocked
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
                if (bakery.cookies >= bakery.buildings[i].cost) {
                    // pour faire apparaître le nombre de batiments achetés
                    divTuile.querySelector('.number').style.display = 'flex'
                    // applique la methode buyBuilding à la tuile sur laquelle on clique
                    bakery.buyBuilding(bakery.buildings[i])
                    // pour afficher dynamiquement sur la page le nombre de batiments achetés, le cout et le stock cookies
                    divTuile.querySelector('.number').innerHTML = bakery.buildings[i].number
                    divTuile.querySelector('.cost').innerHTML = bakery.buildings[i].cost
                    document.getElementById('cookiesStock').querySelector('span').innerHTML = Math.floor(bakery.cookies)
                    document.getElementById('cookiesPerSecond').querySelector('span').innerHTML = Math.round(bakery.cookiesPerSecond * 10) / 10
                }

                // Autrement si compte cookies < cout d'un batiment, on desactive la tuile
                if (bakery.bakeCookies(bakery.cookiesPerSecond) <= bakery.buildings[i].cost){
                    divTuile.classList.remove("enabled")
                    divTuile.className = "disabled"
                }
            }        
        })

        // produire automatiquement les cookies
        setInterval ( doSomething, 10000);
        function doSomething () {
            bakery.bakeCookies(bakery.cookiesPerSecond)
            document.getElementById('cookiesStock').querySelector('span').innerHTML = Math.floor(bakery.cookies)
            console.log(bakery.bakeCookies(bakery.cookiesPerSecond))   
            
            // gestion affichage des éléments dans les tuiles en fonction de l'état : unlocked > locked; disabled > enabled
            for (let i = 0; i < bakery.buildings.length-2; i++){
                let divTuile = document.getElementById(`building-${bakery.buildings[i].name.toLowerCase()}`)
                let nextDivTuile = document.getElementById(`building-${bakery.buildings[i+1].name.toLowerCase()}`)  
                let lastTuile = document.getElementById(`building-${bakery.buildings[i+2].name.toLowerCase()}`)  
                if (bakery.cookies >= bakery.buildings[i].cost){
                    divTuile.classList.remove("locked")
                    divTuile.classList.remove("disabled")
                    divTuile.className = "unlocked enabled"
                    nextDivTuile.classList.remove("locked")
                    nextDivTuile.className = "disabled"  
                    lastTuile.style.display = 'flex'
                }        
            }                          
        }
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
