function isFibonacci(n){
    if(n<2){
        return n
    }
    
    return (isFibonacci(n-1)+isFibonacci(n-2))
}

console.log(isFibonacci(5));
