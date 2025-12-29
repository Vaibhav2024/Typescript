const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

// {
//     name: string;
//     price: 20;
//     isHot: true
// }

let tea: {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}

// ---------------------------------------------------------
type Tea = {
    name: string;
    price: number;
    ingredients: (string|number)[] // this allows both string and number in an array
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "milk"]
}

// -----------------------------------------------------------------------------------------
type Cup = {size: string}
let smallCup: Cup = {size: "200ml"}
let bigCup = {size: "500ml", material: "steel"}
smallCup = bigCup   // this wont give any error cause the minimum number of properties are satisfied for type Cup

// -----
type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arebica"}
const chaibrew: Brew = coffee   // this still wont give any problem cause minimum number of properties are satisfied that were required by Brew

// -------------------------------------------Data Type Split Out--------------------------------------
type Item = {name: string, quantity:number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address[]
}

// ---------------------------------------TODO:Saving or Updating Partial Value-----------------------------------
type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating Chai with", updates)
}
// First when we were not using Partial, it was compulsary to fill all the value that were required by the Type but now after using the Partial we can only fill some value of the Type and it is still ok
updateChai({price: 25})
updateChai({isHot: false})
updateChai({}) // this may cause problem sometimes cause you are can pass empty array too in Partial 

// -------------------------------TODO: Required Keyword---------------------------------FIXME:

type ChaiOrder = {
    name?: string;
    quantity?: number;
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order)
}

placeOrder({
    name: "Masala Chai",
    quantity: 5
})

// so even if we have used ? to functionally scope the variable but if you use Required Keyword and use the Type, it will make i compulsary for the function to receive all the parameter

//-----------------------------------TODO: Pick keyword-------------------------------------------

type Chai1 = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai1, "name" | "price"> // defingn another type which will contain some value of Chai1

const chaiInfo: BasicChaiInfo = {
    name: "Masala Chai",
    price: 25
}   // Pick keyword is quite similar to Partial keyword we used above but the thing is Pick allows us to do Precise work instead so giving full authority to user what whichever value he wants he can give or not, and even when we use Partial user can give empty object, we can use Pick to set some value which are compulasary for user to put, if we dont define the value that have been set using pick it will give an error 

// -------------------------------TODO: Omit Keyword------------------------------------
type ChaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type PublicChai = Omit<ChaiNew, "ingredients">
const newChai: PublicChai = {
    name: "Masala Chai",
    price: 5,
    isHot: true
}   // the Omit keyword omits the variable that are specified so if you make a new datatype using the previous dataype and use Omit and specifiy the properties, then when you are defining a variable you dont need to give that property we are simplying Ommiting that property