/*
The following data types are classified as reference data types:

1. Objects
2. Arrays
3. Functions
*/

/*
1. Objects:-Objects store the data in the form of key-value pairs
where keys are strings (or Symbols) and values can be of any 
data type, including other objects, functions, arrays, etc.
*/

let person={
    'First Name':'Rajat',
    'Last Name':'Singh',
    age:22,
    country:'India'
};

// Dynamically Changing the properties of objects:-
console.table(person);
person["First Name"]='Smita';
console.table(person);

/*
We can access the properties of an object using:
1. Dot notation
2. Bracket Notation
*/
// Dot notation
console.log(person.age);
// Bracket notation
console.log(person['age']);

// Functions in Objects
const car={
    name:'Audi',
    model:'CLA200d',
    'Fuel type':'Diesel',
    'Top Speed':'240kmps',
    'Top Acceleration':'0-100 in 2 sec',
    running:function(){
        return true;
    }
};

console.table(car);
console.log(car.running());


/*
2. Arrays:- In JavaScript, arrays are commonly used to store lists of items, 
such as a list of names, numbers, or any other related data.
*/
let info=['Rajat',22,true];

/*
Methods of array(updation):-

1. push : Adds an item to the end of the array.
2. unshift : Adds an item to the beginning of the array.
3. pop : Removes the last item from the array.
4. shift : Removes the first item from the array.
*/
