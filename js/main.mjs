import Bakery from '../js/classes/bakery.mjs';
console.log(Bakery)

import { store } from './dom/store.mjs';
console.log(store)

import { buildings } from "./data.mjs"
console.log(buildings)


// Information de la boulangerie 
const myBakery = new Bakery();
store(myBakery)

let titreBakery = document.querySelector('h2')
titreBakery.innerHTML = myBakery.name

let stockSpan = document.getElementById('cookiesStock').querySelector('span')
//console.log(stockSpan)
stockSpan.innerHTML = myBakery.cookies

let perSecondSpan = document.getElementById('cookiesPerSecond').querySelector('span')
perSecondSpan.innerHTML = myBakery.cookiesPerSecond
    
// Ajout du nombre de cookies
let bigCookie = document.getElementById('bigCookie');

// Au clic, une icone apparait et disparait
bigCookie.addEventListener('click', (e) => {
    stockSpan.innerHTML = Math.floor(myBakery.bakeCookies(myBakery.cookiesPerClick))
    // Afficher icone +1 lors d'un clic sur bigCookie
    let iconePlus = document.createElement('div')
    
    iconePlus.innerHTML = '+1'
    iconePlus.className = 'plusOne'
    iconePlus.style.left = e.offsetX + 'px'
    iconePlus.style.top = e.offsetY + 'px'
    bigCookie.appendChild(iconePlus)

    // Jouer le son clic
    let playClickSound = document.createElement('audio')
    playClickSound.src = `assets/sounds/click${(Math.floor(Math.random() * 7) + 1)}.mp3`
    iconePlus.appendChild(playClickSound) //un enfant est crée à chaque clic
    playClickSound.play()

    // Retirer icone +1 
    iconePlus.addEventListener('animationend', (e) => {
        bigCookie.removeChild(iconePlus)
    });
});