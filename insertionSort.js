function insertionSort(arr){
    for(i=1;i<arr.length;i++){

        let numberToInsert = arr[i]//one ahead which checks for the condition
        let j = i-1//sorted part pointer
        while(j>=0 && arr[j]>numberToInsert ){

            arr[j+1]=arr[j]
            j=j-1//iterating till first element of the array
        }
        arr[j+1]=numberToInsert

    }


}

const arr=[92,2,34,54,1,11,64]

insertionSort(arr)

console.log(arr);

//bigO(n^2)