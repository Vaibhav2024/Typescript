class Chai {
    flavour: string
    price: number

    constructor(flavour: string, price: number) {
        this.flavour = flavour
        this.price = price
    }
}

const masalaChai = new Chai("Masala", 20)
masalaChai.flavour = "masala"


// --------------------------------------Access Modifier---------------------------------
class Chai1 {
    public flavour: string = "Masala"
    private secret_Ingredients = "Cardamom"  // or #secret_Ingredients
    
    reveal() {
        return this.secret_Ingredients
    }
}

const c = new Chai1()
c.reveal() // to access the function data

// ----------------------------------------------------------------------------------

class Shop {
    protected shopName = "Chai Corner" //only the class and the class which are inheriting this class will get access
}

class Branch extends Shop {
    getName() {
        return this.shopName
    }
}

new Branch().getName()

//------------------------------Read ONly Property---------------------------
class Cup {
    readonly capacity: number = 250

    constructor(capacity: number) {
        this.capacity = capacity
    }
}

//-----------------------------------Getter and Setter-------------------------------------
class MordernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if(value > 5) {
            throw new Error("TO Sweet")
        } else {
            this._sugar = value
        }
    }
}

const c1 = new MordernChai()
c1.sugar = 3

//-------------------------------------------static member-------------------------------------------
class EkChai {
    static shopName = "ChaiCode Cafe" // can be accessed directly using class Name

    constructor(public flavour: string) {

    }
}
console.log(EkChai.shopName)

//---------------------------------------------Abstract Class-----------------------------------------------
// So abstract class is nothing but define all the methods you are going to need in another class, declare them in abstract classes with writing anything in them and then let another class inherit it and use all the function

abstract class Drink {
    abstract make(): void
}

class MyChai extends Drink {
    make(): void {
        console.log("Brewing Chai")
    }
}


//------------------------------------------Composition---------------------------------------------------
class Heater {
    heat(){}
}

class ChaiMaker {
    constructor(private heater: Heater){}

    make() {
        this.heater.heat
    }
}

