type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean
}

function makeChai(order: ChaiOrder) {
    console.log(order)
}

function serveChai(order: ChaiOrder) {
    console.log(order)
}

// when we want to use a datatype more than one time in a code we should simply define the type and use it accross multiple function

// -------------------------------------------------------------------------------------------------------
// Interface there are someplaces where the type gives issues so it is better we use interface instead of type
// The difference in extends and implements is written in explanation.txt file
type TeaRecipe = {
    water: number;
    milk: number;
}

interface TeaRecipe1 {
    water: number;
    milk: number;
} // type and interface wont give error while a class is implementing the type or interface but only if the type is an obj as soon as you define a type as as a static value and tell as class to implement it , it will throw an error thats where the interface come into play use interface instead of type and also prefer using interface instead of type while dealing with class.

class MasalaChai1 implements TeaRecipe {
    water = 100;
    milk = 50;
}

// -------------------------------Example Continues-------------
type cupSize = "small" | "large" // this type of definng is also called as literal type

class Chai implements cupSize {

} // this will give an error cause the cupSize type contains static value to avoid this create an interface and then implement the class

interface cupSize1 {
    size: "small" | "large"
} 

class Chai1 implements cupSize1 {
    size: "small" | "large" = "small";
}  //by using the interface we can solve this kind of problem

//---------------------------Another Example----------------

type Response = {ok: true} | {ok: false}
class myRes implements Response {
    // this will cause and error to fiz this again use the interface
}

// -------------------------------------Intersection and UNion-------------------------------------------
type TeaType = "masala" | "ginger" | "clove"

function orderChai (t: TeaType) {
    console.log(t)
}


type BaseChai = {teaLeaves: number} // in this example we are going to define two types and then using intersection make a new type which will be used by us
type Extra = {masala: number}

type MasalaChai = BaseChai & Extra // & is used for intersection and | is used for union

const cup: MasalaChai = {
    teaLeaves: 2,
    masala: 2
}

// --------------------------------------Optionally defining the datatype parameter------------------
type User = {
    username: string;
    bio?: string 
}

const u1: User = {
    username: "Vaibhav"
}

const u2: User = {
    username: "Vaibhav",
    bio: "Hello"
}

// -------------------------------------Defining readonly type------------------------------------
// the readonly property can only be defined once after it is defined you cannot change it later
type Config = {
    readonly appName: string;
    version: number
}

const cfg: Config = {
    appName: "Vaibhav",
    version: 1
}
// this below line will cause error cause we are trying to change the readonly property after we have set its value
cfg.appName = "poonam"

