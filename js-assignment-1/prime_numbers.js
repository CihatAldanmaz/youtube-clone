function primeNumber(num){

    let isPrime = true;

    if(num == 1){
        console.log("1 is neither prime nor composite number")
    }
    else if(num < 1){
        console.log("number must be bigger than zero")
    }
    else{

    for(i=2; i<num; i++){

        if(num % i === 0){
          isPrime = false;
          break;
        }
    }
}
console.log(isPrime)

}

primeNumber(17)