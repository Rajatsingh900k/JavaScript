//There are total of three types to define a function

//1. Function Declaration

//syntax:-
function summ(a,b){
    return a+b;
}

//2. Function Expression
const sum=function(){
    return 4+4;
}
console.log(sum());

//3. Arrow Function
const newSum=(a,b)=>{return 4+4};
console.log(newSum());

//4. Callback Function(functions can be passed as arguments in another function)




//5. Returning Function(function can return another function)

