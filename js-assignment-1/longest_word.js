
function longestWord(str){

    let max = 0;
    let longest_word = ""

    for(word of str.split(" ")){
        if(word.length > max){
            max = word.length
            longestWord = word
        }
    }
    console.log(longestWord)
}

longestWord("Web Development Tutorial")