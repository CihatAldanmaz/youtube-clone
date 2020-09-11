
function second(arr){
   let new_arr = arr.sort(((a, b) => a - b))

   let secondlowest = new_arr[1];
   let secondgreatest = new_arr[new_arr.length - 2]

   console.log(`second lowest number is ${secondlowest} and second greatest number is ${secondgreatest}`)

}

second([151,100,250,125,1])