let score = "100"
console.log(typeof score)
score = Number(score)//converts string to number
console.log(typeof score)

let num = "33abc"
num = Number(num)
console.log(typeof num)//returns number beacuse it can convert 33 to number
console.log(num)//returns NaN beacuse it can't convert abc to number

let boolValue = ""
boolValue = Boolean(boolValue)
console.log(typeof boolValue)//returns boolean
console.log(boolValue)//returns false beacuse empty string is false
