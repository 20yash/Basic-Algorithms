function linearSearch(arr,target){

    for(i=0;i<=arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
   return -1
    }

console.log(linearSearch([1,3,12,23,45,76],12));
console.log(linearSearch([1,3,12,23,45,76],76));
console.log(linearSearch([1,3,12,23,45,76],49));