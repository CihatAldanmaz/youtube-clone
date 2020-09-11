// Write a JavaScript function that generates all combinations of a string.
//  Example string : 'dog' Expected Output : d,do,dog,o,og,g


function generatesCombinations(str){
    let new_array = [];

    for(i=0; i < str.length; i++){
        for(x=i+1; x < str.length+1; x++){
            new_array.push(str.slice(i,x))
        }
    }

    console.log(new_array)
}

generatesCombinations("dog")