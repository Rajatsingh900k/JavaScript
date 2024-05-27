const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

//chaining
//the result of first chaining is passed to second and so on
//after the final chaing result is pased to the varibal 
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                //.filter( (num) => num >= 40)

console.log(newNums);


//summmary till now:-

//important difference between flter and map

//Map' is used to apply a function on every item in an array and returns the new array. 
//'Filter' is used to create a new array from an existing one, 
//containing only those items that satisfy a condition specified in a function.

//diff between filter, forEach and map
//map() will return a new array as per the conditions applied. forEach() will not return anything. forEach() returns undefined.
// filter() method will return an array of matching elements else will return an empty array if no matching happens.