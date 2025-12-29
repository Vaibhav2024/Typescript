function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai`;
    }
    return `Chai order: ${kind}`;
}
// Type Narrowing: now when we use (.) after the kind while we are checking for string at that time it will suggest the method that can be used on string and below we will get the method suggested for number
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
// Type narrowing simply means write code in such a way that we check the type first and perform the operation on it first so that we dont need to perform different operation on different code
function orderChai(size) {
    if (size === 'small') {
        return `small chai`;
    }
    else if (size === "medium" || size === "large") {
        return "make extra chai";
    }
    return `chai order ${size}`;
}
// ---------------------------------Important----------------------------------------------
class KulhadChai {
    serve() {
        return `Serving kulhad chai`;
    }
}
class Cutting {
    serve() {
        return `Serving cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === 'object' && obj !== null && typeof obj.type === 'string' && typeof obj.sugar === 'number');
}
// when the return becomes true the (is) keyword will convert that true to ChaiOrder so that in serveOrder function it will be able to know that the returned output is of type ChaiOrder
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
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return "Masala Chai";
            break;
        case "ginger":
            return "Ginger Chai";
            break;
        case "elaichi":
            return "Elaichi Chai";
    }
}
// Test cases
//console.log(MakeChai({ type: "masala", spicelevel: 5 }));  // Output: Masala Chai
//console.log(MakeChai({ type: "ginger", amount: 2 }));      // Output: Ginger Chai
//console.log(MakeChai({ type: "elaichi", aroma: 3 }));      // Output: Elaichi Chai
// ------------------------------------------------------------------------------------------
function brew(order) {
    if ("spicelevel" in order) {
        //
    }
}
//--------------------------------------------------------------------------------------------------
function isStringArray(arr) {
    return true;
}
export {};
//# sourceMappingURL=typeNarrowing.js.map