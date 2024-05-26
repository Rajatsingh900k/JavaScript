// this is used to refer to the current context(values).
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//when in node environment the this is refering to empty
// in browser the global object is window

//this can only work in objects it cannot work in funtions
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

//Arrow funtions
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//this is arrow funtion refers to empty object {}
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()