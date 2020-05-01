//import {buildings} from 'data';

export default class Bakery {
    constructor(name, cookies, buildings, cookiesPerClick, cookiesPerSecond){
        this._name = name || 'Titre Cookie'
        this._cookies = cookies || 0
        this._buildings = buildings || []
        this._cookiesPerClick = cookiesPerClick || 1
        this._cookiesPerSecond = cookiesPerSecond || 0
    }

    get name(){
        return this._name
    }
}
console.log(Bakery.name)

