function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const middle = Math.floor(arr.length/2)
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){

    const temp = []
    while(left.length && right.length){
        if(left[0]<=right[0]){
            temp.push(left.shift())
        }
        else
            temp.push(right.shift())
    }
    return [...temp,...left,...right]
}

const arr= [33,2,32,45,65,47,88,9,10]

console.log(mergeSort(arr))