let userName = new String("SumitTiwari")//new keyword is used to create new string object in heap
console.log(userName.length)//returns length of string
console.log(userName[0])//returns character of string
console.log(userName.charAt(0))//returns character of string
console.log(userName.indexOf("T"))//returns index of string
console.log(userName.toLocaleUpperCase())

const url = "https://www.google.com"
console.log(url.includes("google"))//returns true
console.log(url.replace("google","youtube"))

let name = "Sumit Tiwari"
console.log(name.split(" "))
console.log(`Hello !! my first name is ${name.split(" ")[0]} and last name is ${name.split(" ")[1]}`)