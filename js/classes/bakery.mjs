//import {buildings} from 'data';


export default class Bakery {
    constructor(name, cookies = 0, buildings, cookiesPerClick = 1, cookiesPerSecond = 0){
        this._name = name
        this._cookies = cookies
        this._buildings = buildings
        this._cookiesPerClick = cookiesPerClick
        this._cookiesPerSecond = cookiesPerSecond
    }


}