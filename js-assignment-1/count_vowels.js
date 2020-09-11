function countVowels(str){

    let vowels = "aeiou"
    let count = 0;

    for(char of str){
        if(vowels.includes(char)){
            count++
        }
    }
    console.log(count)
}

countVowels("The quick brown fox")

