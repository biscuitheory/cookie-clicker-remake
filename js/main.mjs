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
console.log(stockSpan)
stockSpan.innerHTML = myBakery.cookies

let perSecondSpan = document.getElementById('cookiesPerSecond').querySelector('span')
perSecondSpan.innerHTML = myBakery.cookiesPerSecond
    



