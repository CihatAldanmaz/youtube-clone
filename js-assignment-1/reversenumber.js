// Write a JavaScript function that reverse a number.
//  Example x = 32243;Expected Output : 34223

function reversenum(number){
let strnumber = number.toString().split("").reverse().join("")
return parseInt(strnumber)
}

console.log(reversenum(55441133))