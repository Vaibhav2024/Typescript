const chaiFlavour: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [20]

const rating: Array<number> = [4.5, 6]

// ---------------------------------TODO: Array of object---------------------------------
type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "Masala", price: 20},
    {name: "Adrak", price: 25},
]

// --------------------------------TODO: Readonly Array----------------------------------
const cities: readonly string[] = ["Delhi", "Pune"]
// cities.push("Mumbai")  // you cannot push new values in readonly array

// -------------------------------TODO: Multi Dimesnsional Array-----------------------------
const table: number[][] = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5]
]




//-------------------------------------TODO: Tuples------------------------------------------------
let chaiTuple: [string, number] // defining tuple
chaiTuple = ["Masala", 20] // adding valur in tuple

let userInfo: [string, number, boolean?] // optional parameter also works in tuple
userInfo = ["vaibhav", 21]

//-------------readonly tuple-----------------
let chaiTuple1: readonly [string, number] = ["Masala", 25]

// -------------------------------------TODO: Named Tuple-----------------------------------------
let chaiItems: [name: string, price:number] = ["Masala", 25]




//------------------------------------TODO: enum datatype-----------------------------------------
enum CupSize {
    SMALL,
    LARGE,
    MEDIUM
}

const size = CupSize.LARGE

// ------------------------------- Incremental Behaviour of enum
enum Status {
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102 they next values will automatically get the value incremented from the value above it
}

// ----------------------------------------------------

const enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type: ChaiType) {
    console.log(`Making: ${type}`)
}

makeChai(ChaiType.GINGER)

// its a standard practise to create enum of a single datatype you can make enum of multiple datatype but its a bad practise

enum RandomEnum {
    ID = 1,
    Name = "chai"
} //this is bad practise


// -------------------------------ts tuple are mutable and we can push data----------------------
let t: [string, number] = ["chai", 20]
t.push("masala")
