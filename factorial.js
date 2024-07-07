function fact(n){
    let result = 1

    for(i=2;i<=n;i++){
        result = i*result
        result++
    }
    return result
}

console.log(fact(5));
console.log(fact(1));
console.log(fact(12));