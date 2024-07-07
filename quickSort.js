function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    let right =[]
    let left = []
    for(i=0;i<arr.length-1;i++){
        
        if(arr[i]<pivot)
        {
            left.push(arr[i])
        }
        else
        {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]

}

const arr=[33,2,4,55,6,12,77,9]

console.log(quickSort(arr));