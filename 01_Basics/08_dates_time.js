const mydate = new Date()
// console.log(mydate)

// console.log(mydate.toISOString())//return date in ISO format. ISO Format is used to store date in database. Full form is International Organization for Standardization
// console.log(mydate.toDateString())//return date in string format
// console.log(mydate.toLocaleString())//return date in local format

let myTime = new Date('01-01-2025')
// console.log(myTime.toLocaleString())//return timestamp
let timeStamp = Date.now()
// console.log(timeStamp)//return timestamp

// console.log(mydate.getTime() - timeStamp)//return difference in milliseconds


// Problem: If user buy a course on "01-01-2024" and the course is valid for 2 years then how many days left from today to expired a course//

const buyDate = new Date('07-19-2023')
const expDate = new Date('07-19-2025')
console.log(expDate.getTime() - buyDate.getTime())//return difference in milliseconds
console.log((expDate.getTime() - buyDate.getTime())/(1000*60*60*24))//return difference in days
let today = new Date()
console.log(Math.floor((expDate.getTime() - today.getTime())/(1000*60*60*24)))
