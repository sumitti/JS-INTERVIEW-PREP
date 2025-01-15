function sayHello() {
    console.log("Hello");
}
// sayHello()

function add(num1, num2) {
    console.log(num1 + num2);
}
// add(2,3)

function isLoggedIn(username){
    return `${username} just logged in`
}
// console.log(isLoggedIn("sumit"))

function userdetails(username){
    if(!username){
        return "username is required"
    }
    return `${username} just logged in`
}
console.log(userdetails())
console.log(userdetails("sumit"))
