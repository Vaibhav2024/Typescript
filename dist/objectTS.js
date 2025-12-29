const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
};
// {
//     name: string;
//     price: 20;
//     isHot: true
// }
let tea;
tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
};
const adrakChai = {
    name: "Adrak Chai",
    price: 25,
    ingredients: ["ginger", "milk"]
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup; // this wont give any error cause the minimum number of properties are satisfied for type Cup
const coffee = { brewTime: 5, beans: "Arebica" };
const chaibrew = coffee; // this still wont give any problem cause minimum number of properties are satisfied that were required by Brew
const updateChai = (updates) => {
    console.log("Updating Chai with", updates);
};
// First when we were not using Partial, it was compulsary to fill all the value that were required by the Type but now after using the Partial we can only fill some value of the Type and it is still ok
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({}); // this may cause problem sometimes cause you are can pass empty array too in Partial 
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "Masala Chai",
    quantity: 5
});
const chaiInfo = {
    name: "Masala Chai",
    price: 25
}; // Pick keyword is quite similar to Partial keyword we used above but the thing is Pick allows us to do Precise work instead so giving full authority to user what whichever value he wants he can give or not, and even when we use Partial user can give empty object, we can use Pick to set some value which are compulasary for user to put, if we dont define the value that have been set using pick it will give an error 
const newChai = {
    name: "Masala Chai",
    price: 5,
    isHot: true
}; // the Omit keyword omits the variable that are specified so if you make a new datatype using the previous dataype and use Omit and specifiy the properties, then when you are defining a variable you dont need to give that property we are simplying Ommiting that property
export {};
//# sourceMappingURL=objectTS.js.map