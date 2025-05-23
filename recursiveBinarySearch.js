function recursiveBinarySearch(arr,target)
    {
    return Search(arr,target,0,arr.length-1)
    }
    function Search(arr,target,leftIndex,rightIndex)
    {
        if(leftIndex>rightIndex)
        {
            return -1
        }
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)

        if(target==arr[middleIndex]){
            return middleIndex
        }
        if(target<arr[middleIndex]){
            return Search(arr,target,leftIndex,middleIndex-1)
        }
        else{
            return Search(arr,target,middleIndex+1,rightIndex)
        }
    }

console.log(recursiveBinarySearch([-5,2,4,6,8,10,70],70));