function climbingStaircase(n){
    const noOfWays=[1,2]

    for(i=2;i<=n;i++){
        noOfWays[i]=noOfWays[i-1]+noOfWays[i-2]
    }

    return noOfWays[n-1]//array starts from 0

}

console.log(climbingStaircase(5));