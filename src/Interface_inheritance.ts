interface Chai {
    flavor: string;
    price: number;
    milk?: boolean
}

const MasalaChai: Chai = {
    flavor: "masala",
    price: 30
}

// ------------------------------------
interface Shop {
    readonly id: number;
    name: string
}

const s: Shop = {
    id:1,
    name: "ChaiCode"
}

// s.id = 2    not allowed cause they are readonly and there value can only be defined once

// -----------------------------------------------------------
interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => p*0.5

// --------------------------------------------------------------
interface TeaMachine {
    start(): void;
    stop(): void
}

const Machine: TeaMachine = {
    start() {
        console.log("start")
    },
    stop() {
        console.log("Stop")
    },
}

// -------------------------------------Index Signature--------------------------------------
interface ChaiRatings {
    [flavor: string]: number
}
// flavor is considered as key and its corresponding value will be a number
const ratings: ChaiRatings = {
    masala: 4.5,
    ginger: 4.5
}

// ------------------------------Important THing about interface--------------------------------
interface User {
    name: string
}

interface User {
    age: number
}
// you can make more than 1 interface with same name but when you assign a variable to that interface, then all the interfaces properties should be satisfied
const u: User = {
    name: "Hitesh",
    age: 20
}

// another example but with inheritance
interface A {a: string}
interface B {b: string}

interface C extends A, B {}


