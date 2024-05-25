// Dates
//dates in JS are calculated from arbitrary date jan 1 1970
//dates are ususallly calculated in milliseconds.

let myDate = new Date()//object of a date
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON);
// console.log(myDate.toLocaleTimeString);
// console.log(myDate.toUTCString);
// console.log(typeof myDate);

// note:- months in js are started from 0 and not from 1 if months are given in single and not in MM format;
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()//give milliseconds from that arbitrary date

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));//to convert from millisec into sec

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

let x=newDate.toLocaleString('default', {
    weekday: "long",
    month:"2-digit",
    year: "numeric"
})
console.log(x);
