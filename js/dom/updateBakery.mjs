export const updateBakary = () => {

let titreBakery = document.querySelector('h2')
titreBakery.innerHTML = myBakery.name

let stockSpan = document.getElementById('cookiesStock').querySelector('span')
console.log(stockSpan)
stockSpan.innerHTML = myBakery.cookies


let perSecondSpan = document.getElementById('cookiesPerSecond').querySelector('span')
perSecondSpan.innerHTML = myBakery.cookiesPerSecond

}
