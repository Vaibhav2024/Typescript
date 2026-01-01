// generics are also template same as interface but they make code a bit more reusable
// generic basically means general functions, how much can we make function generic so that it can receive multiple value
function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("Masala")
wrapInArray(21)
wrapInArray({flavor: "Ginger"})

//-------------------------------------------------------
function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair("masala", 20)
pair("masala", "chai")
pair("masala", {})

// --------------------------------------Generic Interface--------------------------------
interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 10}
const numberBoxCup: Box<string> = {content: "meow"}

// -------------------------------------------------------------------------------------------
interface ApiPromise<T> {
    status: number,
    data: T
}

const res: ApiPromise<{flavor: string}> = {
    status: 200,
    data: {flavor: "masala"}
}