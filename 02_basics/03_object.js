// singleton in js means that only one instance of a class can be created
// e.g. const obj = new Object()
const mySym = Symbol("key1")

// object literal
const user = {
    name : "Sumit Tiwari",
    email : "sumit@gmail.com",
    "password key" : "123456",    
    age : 24,
    [mySym] : "mykey",
    isLoggedIn : true,
    workingDays: ["monday","tuesday","wednesday"]
}

// console.log(user["name"])//best practice to access property of object
// console.log(user["password key"])
// console.log(user[mySym])//access symbol property of object
// console.log(typeof mySym)

console.log(user.workingDays)
console.log(user.workingDays[1])

// Object.freeze(user)//freeze object so that no changes can be made in object


user.greeting = function(){
    console.log("Hello " + this.name);
}//add function to object

console.log(user.greeting())//access function of object
console.log(user.greeting)//return [Function (anonymous)]
