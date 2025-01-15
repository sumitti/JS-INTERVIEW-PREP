const MU_heros = ["thor","ironman","spiderman"]
const DC_heros = ["superman","flash","batman"]

MU_heros.push("hulk")
// console.log(MU_heros)

const allHeros = MU_heros.concat(DC_heros)
// console.log(allHeros)

const allHeros2 = [...MU_heros,...DC_heros]//spread operator
// console.log(allHeros2)

const anotherArray = [1,2,3,[4,5,6],7,8,[9,[10],11]]
// console.log(anotherArray.flat(Infinity))

//console.log(Array.isArray("SUMIT"))
//console.log(Array.from("SUMIT"))//convert string to array

let arrTostr = ['s','u','m','i','t']
//console.log(arrTostr.join(""))//convert array to string 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))//convert multiple values to array