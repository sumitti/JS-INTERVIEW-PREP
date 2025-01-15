const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sumit"
tinderUser.isLoggedIn = true

// console.log(tinderUser)

const regularUser = {
    email : "sumit@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Sumit",
            lastName : "Tiwari"
        }
    },
    isLoggedIn : true
}

// console.log(regularUser.fullName.userFullName.firstName)
// console.log(regularUser.isLoggedIn?"User is logged in":"User is not logged in")


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = Object.assign({},obj1,obj2)//merge two object
// console.log(obj4)
// const obj3 = {...obj1,...obj2}//spread operator
// console.log(obj3)

// console.log(Object.keys(tinderUser))//return array of keys
// console.log(Object.values(tinderUser))//return array of values

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))//return true or false

const course = {
    courseName : "JavaScript",
    price : "999",
    learning : "self-paced",    
}

const {price,learning} = course

// console.log(price,learning)

const {courseName : Name} = course//destructuring
console.log(Name)