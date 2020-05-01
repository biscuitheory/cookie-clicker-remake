export default class Building {
    constructor(name, description, number, cookiesPerSecond , cost){
        this._name = name ||  'batiment';
        this._description = description  ||  'chouchou';
        this._number = number ||  0;
        this._cookiesPerSecond = cookiesPerSecond ||  1;
        this._cost = cost ||   1000;
    }

}
