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
//console.log(stockSpan)
stockSpan.innerHTML = myBakery.cookies

let perSecondSpan = document.getElementById('cookiesPerSecond').querySelector('span')
perSecondSpan.innerHTML = myBakery.cookiesPerSecond
    
//ajout du nombre de cookies
let bigCookie = document.getElementById('bigCookie');
//au clic, une icone apparait et disparait
bigCookie.addEventListener('click', (e) => {
    stockSpan.innerHTML = myBakery.bakeCookies()
    //afficher icone +1 lors d'un clic sur bigCookie
    let iconePlus = document.createElement('div')
    
    iconePlus.innerHTML = '+1'
    iconePlus.className = 'plusOne'
    iconePlus.style.left = e.offsetX + 'px'
    bigCookie.appendChild(iconePlus)

    //retirer icone +1 
    iconePlus.addEventListener('animationend', (e) => {
        bigCookie.removeChild(iconePlus)
    });
})

