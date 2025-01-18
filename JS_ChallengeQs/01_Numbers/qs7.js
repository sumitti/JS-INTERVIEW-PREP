// Question 7: Converting a Number to Binary
// Write a function convertToBinary that converts a given number into its binary representation as a string.

// Example:

function convertToBinary(number) {
    //Your code here
    //logic-->
    // let Binary = ""
    // if(number == 0) return '0'
    // while(number > 0){
    //     Binary += (number%2).toString();
    //     number = Math.floor(number / 2)
    // }
    // return Binary.split('').reverse().join('')
    return number.toString(2)
    
}

// Example usage
console.log(convertToBinary(10)); // Output: "1010"
console.log(convertToBinary(255)); // Output: "11111111"
console.log(convertToBinary(0)); // Output: "0"