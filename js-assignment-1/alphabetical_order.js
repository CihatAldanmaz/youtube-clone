// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 

function alphabeticalOrder(str){
    let newstr = str.split("").sort().join("")
    console.log(newstr)
}

alphabeticalOrder("hello world")