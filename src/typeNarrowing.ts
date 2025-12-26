function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai`
    }
    return `Chai order: ${kind}`
}
// Type Narrowing: now when we use (.) after the kind while we are checking for string at that time it will suggest the method that can be used on string and below we will get the method suggested for number


function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}
// Type narrowing simply means write code in such a way that we check the type first and perform the operation on it first so thay we dont can perform different operation on different code

function orderChai(size: "small" | "medium" | 'large' | number) {
    if (size === 'small') {
        return `small chai`
    } else if (size === "medium" || size === "large") {
        return "make extra chai"
    }

    return `chai order ${size}`
}

// ---------------------------------Important----------------------------------------------
class KulhadChai {
    serve () {
        return `Serving kulhad chai`
    }
}

class Cutting {
    serve () {
        return `Serving cutting chai`
    }
}

function serve (chai: KulhadChai | Cutting) {
    if (chai instanceof KulhadChai) {
        return chai.serve()
    }
} 
// Test cases
//console.log(serve(new KulhadChai()));   // Output: Serving kulhad chai
//console.log(serve(new Cutting()));      // Output: Serving cutting chai

// -----------------------------------Important Defining Custom Type Guard-----------------------
type ChaiOrder = {
    type: string,
    sugar: number
}

function isChaiOrder(obj:any) : obj is ChaiOrder {  
    return (
        typeof obj === 'object' && obj !== null && typeof obj.type === 'string' && typeof obj.sugar === 'number'
    )
}

// when the return becomes true the (is) keyword will convert that true to ChaiOrder so that in serveOrder function it will be able to know that the returned outpur is of type ChaiOrder
// Simple Example for this
// function isNumber(x: any): x is number {
//     return typeof x === "number"
// }

// function printValue(value: number | string) {
//     if (isNumber(value)) {
//         value.toFixed(2) // OK
//     } else {
//         value.toUpperCase() // OK
//     }
// }


function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

// Test cases
//console.log(serveOrder({ type: "masala", sugar: 2 }));   // Output: Serving masala chai with 2 sugar
//console.log(serveOrder("Black tea"));                     // Output: Serving custom chai: Black tea
//console.log(serveOrder({ type: "ginger", sugar: 1 }));    // Output: Serving ginger chai with 1 sugar
//console.log(serveOrder({ type: "green", sugar: "no" }));  // Output: Serving custom chai: [object Object]

// ---------------------------------------------------------------------------------------

type MasalaChai = {type: "masala", spicelevel: number};
type GingerChai = {type: "ginger", amount: number};
type ElaichiChai = {type: "elaichi", aroma: number};

type Chai = MasalaChai | GingerChai | ElaichiChai

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return "Masala Chai"
            break
        case "ginger":
            return "Ginger Chai"
            break
        case "elaichi":
            return "Elaichi Chai"
    }
}
// Test cases
//console.log(MakeChai({ type: "masala", spicelevel: 5 }));  // Output: Masala Chai
//console.log(MakeChai({ type: "ginger", amount: 2 }));      // Output: Ginger Chai
//console.log(MakeChai({ type: "elaichi", aroma: 3 }));      // Output: Elaichi Chai

// ------------------------------------------------------------------------------------------
function brew(order: MasalaChai | GingerChai) {
    if ("spicelevel" in order) {
        //
    }
}

//--------------------------------------------------------------------------------------------------
function isStringArray (arr: unknown) : arr is string {
    return true
}