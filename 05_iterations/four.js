//for-in loop(for objects as well);

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

//fetching keys and then putting it to get the output. ex=> objecyName[key]
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

//for-in loops with arrays
//note for-of loop give values directly of an array, where as for each loop give the keys 
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(`keys of this array=>${key}`);
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }