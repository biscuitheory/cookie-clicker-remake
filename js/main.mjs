import Bakery from '../js/classes/bakery.mjs';
console.log(Bakery)

import Building from '../js/classes/building.mjs';
console.log(Building)

import { store } from '../js/classes/store.mjs';
console.log(store)

import { buildings } from "./data.mjs"
console.log(buildings)


//information de la boulangerie 
const myBakery = new Bakery();

let titreBakery = document.querySelector('h2')
titreBakery.innerHTML = myBakery.name

let stockSpan = document.getElementById('cookiesStock').querySelector('span')
// console.log(stockSpan)
stockSpan.innerHTML = myBakery.cookies

let perSecondSpan = document.getElementById('cookiesPerSecond').querySelector('span')
perSecondSpan.innerHTML = myBakery.cookiesPerSecond
    
//ajout du nombre de cookies
let bigCookie = document.getElementById('bigCookie');
//au clic, une icone apparait et disparait
bigCookie.addEventListener('click', (e) => {
    stockSpan.innerHTML = myBakery.bakeCookies(myBakery.cookiesPerClick)
    //afficher icone +1 lors d'un clic sur bigCookie
    let iconePlus = document.createElement('div')
    
    iconePlus.innerHTML = '+1'
    iconePlus.className = 'plusOne'
    iconePlus.style.left = e.offsetX + 'px'
    bigCookie.appendChild(iconePlus)

    //jouer le son clic
    let playClickSound = document.createElement('audio')
    playClickSound.src = `assets/sounds/click${(Math.floor(Math.random() * 7) + 1)}.mp3`
    iconePlus.appendChild(playClickSound) //un enfant est crée à chaque clic
    playClickSound.play()

    //retirer icone +1 
    iconePlus.addEventListener('animationend', (e) => {
        bigCookie.removeChild(iconePlus)
    });
    
    let cursor = document.getElementById('building-cursor')
    let grandma = document.getElementById('building-grandma')
    // let costCursor = document.getElementsByClassName('cost')
    // let cost = costCursor.innerHTML


    for (let i = 0; i < buildings.length-1; i++){
        let divTuile = document.getElementById(`building-${buildings[i].name.toLowerCase()}`)
        let nextDivTuile = document.getElementById(`building-${buildings[i+1].name.toLowerCase()}`)  
        let lastTuile = document.getElementById(`building-${buildings[i+2].name.toLowerCase()}`)  
        lastTuile.style.display = 'none'
        if (myBakery.cookies >= buildings[i].cost){
            divTuile.classList.remove("locked")
            divTuile.classList.remove("disabled")
            divTuile.className = "unlocked enabled"
            nextDivTuile.classList.remove("locked")
            nextDivTuile.className = "unlocked disabled"  
            lastTuile.style.display = 'flex'
        }
            // cursor.className = cursor.className.replace(/\bmystyle\b/g, "unlocked enabled")
        }

        }
    // if (myBakery.cookies >= 5){
    //     cursor.classList.remove("locked")
    //     cursor.classList.remove("disabled")
    //     cursor.className = "unlocked enabled"
    //     grandma.classList.remove("locked")
    //     grandma.className = "disabled"

    //     // cursor.className = cursor.className.replace(/\bmystyle\b/g, "unlocked enabled")
    // }
    // if (myBakery.cookies >= 10){
    //     grandma.classList.remove("disabled")
    //     grandma.className = "unlocked enabled"
       
    // }
  
        
)



//activation & affichage des tuiles

//activer et afficher tuile Cursor

// console.log(unlockedEnabled)


//activer et afficher tuile Grandma
//if (bakeCookies(?) >= 100)







