//var c = 300
//{}=>scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

//nested scope
//closure:- child can accss prent variable but reverse is not true;
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
//in this we can access the funtin before its declaration
function addone(num){
    return num + 1
}


//in this we cannot access the funtion before its declration.
addTwo(5)
const addTwo = function(num){
    return num + 2
}
