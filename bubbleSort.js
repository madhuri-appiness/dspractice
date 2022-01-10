const bubbleSort =(arr) =>{
    for(let i=0; i< arr.length-1; i++){
        for(let j=0; j< arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                // let temp = arr[j];
                // arr[j] = arr[j+1];
                // arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const array = [1, 4, 2, 6, 8, 345, 123, 43, 32, 5674, 2345, 2, 9];
console.log(bubbleSort(array))

//complexity space complexity
//O(n2)         O(1)
