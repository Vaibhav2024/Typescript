let response: any = "42" // type is still any

let numericLength: number = response.length // if you write like this then it will work but you wont get recomendation by vscode cause here we are not forcing and telling to belive it is of type number to avoid this and get suggestion use below method

let numbericLength1: number = (response as string).length //forcefull type assertion

// -----------------------------------------------------------------------------------------------------
type Book = {
    name: string
}

let bookString = '{"name": "One thing"}';
let bookObject = JSON.parse(bookString) as Book; // here if we forget to write (as Book) then there is no confirmation that it is of type Book and it will not give suggestion during console.log 
console.log(bookObject.name)

// --------------------------------------------------------------------------------------------------
const inputElement = document.getElementById("username") as HTMLInputElement


//-------------------------------------Differnece between any and unknown
let value: any
value = "chai"
value = [1, 2, 3]
value = 2.5
value.toUpperCase() // this will give error but when we run program but for now we wont see any error while writing


let newValue: unknown
newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5
newValue.toUpperCase() // but as sson as you change the type to unknown it gives error cause know it knows new value contains numeric value

// how to resolve this

let newValue1: unknown
newValue1 = "chai"
newValue1 = [1, 2, 3]
newValue1 = 2.5

if (typeof newValue1 === "string") {
    newValue1.toUpperCase() // using the if it wont generate error cause now the code has guarantee it is string
}

// ------------------------------------Type Guard in Try Catch block-----------------------------

try {
    
} catch (error) {
    console.log(error.message) // this will generate error cause it doesnt know what is the type of error 
}

try {
    
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    console.log(error)
}

// -----------------------------------------------------------------------------------------------------------
const data: unknown = "chai"
const strData: string = data // this will generate and error even thought it contains string its type is still unknown, to avoid this we need to tell data is string
const strData1: string = data as string


// ---------------------------------Never Datatype------------------------------------------------------
type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void { // void mean i dont care whatever it returns
    if (role === "admin") {
        console.log("Redirecting to admin dashboard")
        return;
    }
    if (role === "user") {
        console.log("Redirecting to user dashboard")
        return;
    }
    role; // so if you hover over it you will se its type as superadmin but if you dont write superadmin in Role while defining it, and hover on role it will show type as never cause every value of Role was checked and nothing was left but when we write superadmin in Role abd dont use it in our function it will show type superadmin cause it is not returning anything used sometimes to know what we havent written code for 
}

function neverReturn(): never { // this function will never return anything
    while(true) {}
}
