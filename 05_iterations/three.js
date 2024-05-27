// for of

// ["", "", ""]
// [{}, {}, {}] //objects in array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps //unique vaule

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
//map are not iterable with this way(for-in loop):-
for(const key in map)
    {
        console.log(key);
    }

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
 
//objects are no iterable with for-of loop
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }