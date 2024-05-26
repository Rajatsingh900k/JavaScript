const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)//array ke andar array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
 
// const allHeros = marvel_heros.concat(dc_heros)//concatenate two arrays and return a new array
// console.log(allHeros);

//spread operator(...var_name):- spreads all the elements of the arrays and we gather them to make a new array
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity);//array ke andar array ke andr array ko ek single array mein laa deta h, para meter me depth deni rehti h
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))//convertes value of parameter into array
//it cannot make array from the give parameter, we need to explicitly, specify it to make array from key or value
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//returns a new element from the set of parameter

