let arr1 = [1,2,3,4,5]
let arr2 = new Array(1,2,3,4,5)
console.log(arr1)
console.log(arr2)

console.log(arr1[0])
console.log(arr2[0])

console.log(arr1.length)//returns length of array

console.log(arr1.push(6))//add element at last
console.log(arr1.pop())//remove element at last

console.log(arr1.unshift(0))//add element at first
console.log(arr1.shift())//remove element at first

console.log(arr2.slice(1,3))// remove elements from index 1 to 3 and don't change the original array
console.log(arr2.splice(1,3))//remove elements from index 1 to 3 and change the original array