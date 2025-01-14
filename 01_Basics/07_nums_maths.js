let num = 400
// console.log(num)

let num1 = new Number(100)
// console.log(num1)

// console.log(num1.toString())
// console.log(num1.toFixed(2))//return 100.00
// console.log(typeof num1)

let otherNum = 123.956
// console.log(otherNum.toPrecision(3))//return 124 beacuse 123.956 has 3 digits after decimal point 

let hundred = 1000000
// console.log(hundred.toLocaleString('en-IN'))


//+++++++++++++++++++  maths ++++++++++++++++++++++++++++++//

let a = 3.14
// console.log(Math.round(a))//return 3
// console.log(Math.floor(a))//return 3
// console.log(Math.ceil(a))//return 4

// for (let i = 0; i < 10; i++) {
//     console.log(Math.random())
// }
// console.log(Math.random())

let magicNum = Math.floor(Math.random()*10) +1 //return random number between 1 to 10
// console.log(magicNum)

let dice = Math.floor(Math.random()*6) +1 //return random number between 1 to 6
// console.log(dice)

//generate number btw 10 to 20
let randomNum = Math.floor(Math.random()*11) +10
console.log(randomNum)