//affichage dynamique des informations de la boulangerie
const updateBakery = () => {
    let myBakery = document.querySelector('h2')
    let cookiesStock = document.getElementById('cookiesStock')
    let cookiesPerSecond = document.getElementById('cookiesPerSecond')

    //affichage du nom de myBakery
    window.addEventListener('load', (event) => {
        // myBakery.innerHTML = myBakery._name
        let nameBakery = myBakery.getAttribute('name');
        
        
    });
}
updateBakery()

const myBakery = new Bakery();