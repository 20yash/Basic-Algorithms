function bubbleSort(arr){
    let swapped
    do {
        swapped = false

        for(i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                temp=arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
        }
        
    } while (swapped);
}

const arr=[6,66,54,2,3,44,12,8]

bubbleSort(arr)

console.log(arr);