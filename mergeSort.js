function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const midArray = Math.floor(arr.length/2)
    const leftArray = arr.slice(0,midArray)
    const rightArray = arr.slice(midArray)
    return merge(mergeSort(leftArray),mergeSort(rightArray))
}

function merge(leftArray,rightArray){
    const temp =[]
    while(leftArray.length && rightArray.length){
        if(leftArray[0]<=rightArray[0]){
            temp.push(leftArray.shift())
        }
        else{
            temp.push(rightArray.shift())
        }
    }
    return [...temp,...leftArray,...rightArray]
}

const arr= [100,2,32,12,55,63,7]

console.log(mergeSort(arr));