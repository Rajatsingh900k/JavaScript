//for-each loop
//we need to provide a call-back funtion its parameter
const coding = ["js", "ruby", "java", "python", "cpp"]

//call back funtion do not have name
//m1
// coding.forEach( function (val){
//     console.log(val);
// } )

//m2
// coding.forEach( (item) => {
//     console.log(item);
// } )

//m3
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )