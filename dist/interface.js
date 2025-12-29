function makeChai(order) {
    console.log(order);
}
function serveChai(order) {
    console.log(order);
}
class MasalaChai1 {
    water = 100;
    milk = 50;
}
class Chai {
} // this will give an error cause the cupSize type contains static value to avoid this create an interface and then implement the class
class Chai1 {
    size = "small";
} //by using the interface we can solve this kind of problem
class myRes {
}
function orderChai(t) {
    console.log(t);
}
const cup = {
    teaLeaves: 2,
    masala: 2
};
const u1 = {
    username: "Vaibhav"
};
const u2 = {
    username: "Vaibhav",
    bio: "Hello"
};
const cfg = {
    appName: "Vaibhav",
    version: 1
};
// this below line will cause error cause we are trying to change the readonly property after we have set its value
cfg.appName = "poonam";
export {};
//# sourceMappingURL=interface.js.map