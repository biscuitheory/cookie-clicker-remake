
export default class Building {
    constructor(building){
        const {name, description, number = 0, cookiesPerSecond, cost} = building
        this._name = name
        this._description = description
        this._number = number
        this._cookiesPerSecond = cookiesPerSecond
        this._cost = cost
    }
    
    get name(){
        return this._name
    }

    get description(){
        return this._description
    }

    get number(){
        return this._number
    }

    get cookiesPerSecond(){
        return this._cookiesPerSecond
    }

    get cost(){
        return this._cost
    }

    set cost(cost){
        this._cost = cost
    }

    // Acheter un bâtiment de production
    buy(){
        console.log('Coucou')
        this._number += 1
        this._cost = Math.ceil(this._cost * 1.15)
        console.log(this._cost)
    }
    
}

