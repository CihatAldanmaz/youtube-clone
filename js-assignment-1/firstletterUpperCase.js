// Write a JavaScript function that accepts a string as a parameter and converts the first letter ofeach word of the string in upper case. Example string : 'the quick brown fox' Expected Output : 'The Quick Brown Fox '

function firstLetter(str){

let words = [];

for(word of str.split(" ")){
    words.push(word[0].toUpperCase() + word.slice(1));
}
    console.log(words.join(' '))
}

firstLetter("micheal scott is best boss in the world")