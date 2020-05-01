//import {buildings} from 'data';
export default class Bakery{
    constructor(name ='le gros cookie', cookies = 5, buildings= [], cookiesPerClick = 1 , cookiesPerSecond = 0 ){
        this._name = name;
        this._cookies = cookies;
        this._buildings = buildings;
        this._cookiesPerClick = cookiesPerClick;
        this._cookiesPerSecond = cookiesPerSecond;  
    }
    get name(){
        return this._name
    }
    get cookies(){
        return this._cookies
    }

}
