//String can be denaoted as single quote as well as double quotes;

const name = "Rajat";//first method to declare a string.
const repoCount = 12;
const userEmail=new String("RajatSingh900k@gmail.com");//second mehtod to declare a string.

//old method of writing a string
// console.log(name + repoCount + " Value");

//string interpolation:- ${}
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com');

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);//4 is not included only till 3
console.log(newString);

//slice is similar to .substring but we can also give negative value in its arguement

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

//trim and replace 
//trim method: remove starting and ending spaces.
const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));;