function isFactorial(n){
    if(n==0){
        return 1
    }

    return n*isFactorial(n-1)
}
console.log(isFactorial(5));