//  Primitive:-call by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//symbol:-  even if value is same but they are unique.
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) :- pass by address/reference

// Array, Objects, Functions

//Array
const heros = ["shaktiman", "naagraj", "doga"];
//object(with is {})
let myObj = {
    name: "hitesh",
    age: 22,
}

//funtion declaration as variable.

//we can store a funtion in variable in javasript
const myFunction = function(){
    console.log("Hello world");
}
console.log(myFunction);
console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3