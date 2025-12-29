function makeChai(type: string, cups: number) {
    console.log(`Making ${cups} cups of ${type}`)
}

makeChai("Masala", 2)

function getChaiPrice(): number {
    return 25   //the return datatype should always be number 
}

// --------------------------------------------------------------------------------------------------------
function makeOrder(order: string): string | null {
    if (!order) return null
    return order
}

// ------------------------------------TODO: Logger Function----------------------------------------
function logChai(): void {  // void means our function is not going to return anything
    console.log("Chai is Ready")
}

// ---------------------------------TODO: OPtional Parameter and Default Paramter---------------------------
function orderChai(type?: string) { // optinal parameter here we are ok if we dont receive anything
    console.log(type)
}

function orderChai1(type: string = "Masala Chai") { // here we are giving default value so if no value is received default value will be used
    console.log(type)
}

// -----------------------------------------------------------------------------------------------------------

function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}): number {
    return 24
}