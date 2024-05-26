// const tinderUser = new Object()//declaring an object using constructor//single to object
const tinderUser = {};//non singletgon object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    //we can declare nested objects-
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
//the quection mark after fullname is used for providing a protection, whoch will check if fullname exist 
//if not exist then it will not fetch, this is generally used if the data/object is comming from the api.
// console.log(regularUser.fullname?.userfullname.firstname);

//concatenating/merging two objects(similar to the array merging)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }

//using assign method.
// first parameter is target, objects merged, will be stroed in that target object.
// const obj3 = Object.assign({}, obj1, obj2, obj4)

//using spread operator.
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//value comes from the database as follows:- 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

//give ouput as array of keys,value and enteries....
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//check is ceatain property is avvailble or not


//de-structuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//const {what value to be extracted:new name given} = from where value to be extracted?
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


//api:- in early days apis comes in the form of xml no a days they are come as json
//trested as json.
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//note: it is not necessary that api is always give as object some thimes it si given the format of arrays as given below:- 

[
    {},
    {},
    {}
]

