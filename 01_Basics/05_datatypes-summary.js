// Datatypes are divided into 2 parts on the basis of their behaviour and memory allocation
// Primitive Data Types
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const fullName = "Sumit_Tiwari"
const phoneNo = 9919675640n
let isLoggedIn = true
let feedback = null
let emailId = undefined
let passKey1 = Symbol(123)
let passKey2 = Symbol(123)

// console.log(passKey1 == passKey2)//return false
// console.table([typeof fullName,typeof phoneNo,typeof isLoggedIn,typeof feedback,typeof emailId,typeof passKey1,typeof passKey2]);



// reference data types(non-primitive data types)
// 3 types : Array, Object, Function

let arr = ["banana","jackfruit","apple","orange","grapes"]
// console.log(arr);
// console.log(typeof arr);//return object

let obj = {
    emailId:"sumit@gmail.com",
    password:763289739,
    isLoggedIn: true
}

// console.log(obj.emailId)
// console.log(obj.password)
// console.log(obj.isLoggedIn)
// console.log(typeof obj)


function Add(a,b) {
    // console.log(a+b);
}

Add(2,5)

// console.log(typeof Add)//return function


//++++++++++++++++++++++++++++++++  Stack(primitive) and Heap(non-primitive)  +++++++++++++++++++++++++++++++//
let nameOne = "Sumit"
let nameTwo = nameOne//copy of nameOne variable is stored in nameTwo
nameTwo = "Amit"
console.log(nameOne)
console.log(nameTwo)


let userOne = {
    emailId : "sumit@gmail.com",
    password : 85415465
}
let userTwo = userOne
 userTwo.emailId = "amit@gmail.com"//change in userTwo will reflect in userOne

console.log(userOne.emailId) 