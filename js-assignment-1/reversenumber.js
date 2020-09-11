
function reversenum(number){
let strnumber = number.toString().split("").reverse().join("")
return parseInt(strnumber)
}

console.log(reversenum(55441133))