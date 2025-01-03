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


/************************* Operations ********************************/
let value = 3
let negValue = -value
console.log(negValue)//returns -3

console.log(3+3)//returns 6
console.log(3-3)//returns 0
console.log(3*3)//returns 9
console.log(3/3)//returns 1 
console.log(3%3)//returns 0
console.log(3**3)//returns 27

console.log("1" + 2)//returns 12 beacuse 1 is string and 2 is number
console.log(1 + "2")//returns 12
console.log("1" + "2")//returns 12
console.log(1 + 2 + "3")//returns 33 beacuse 1+2=3 and 3+"3"=33
console.log(true + 1)//returns 2 beacuse true is 1 and 1 is number

let num1, num2, num3;
num1 = num2 = num3 = 3 + 3;
console.log(num1, num2, num3)//returns 6 6 6

let y = 1;
y += 2;//y=y+2
console.log(y)//returns 3

let x = 1;
x++;//x=x+1-->post increment or postfix

let z = 1;
++z;//z=z+1-->pre increment or prefix
