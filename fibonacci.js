function fibonacci(n){


    // let sum=0
    // sum =sum + n
    // sum++;
    // if(sum == 0){
    //     return 1
    // }
    // else
    //     return sum


    //in array


    const arr = [0,1]

    for(i=2;i<n;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }

            return arr
}
console.log(fibonacci(7));
console.log(fibonacci(5));
console.log(fibonacci(3));