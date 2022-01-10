const insertionSort = arr =>{
    for(let i=1; i< arr.length; i++){
        for(let j=i; j >0 ; j--){
            if(arr[j] < arr[j-1]){
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
    }
    return arr;
}


const array = [10,1, 4, 2, 6, 8, 345, 123, 43, 32, 0, 5, 78, 5674, 2345, 2, 9];
console.log(insertionSort(array))
// checking each item one before it

//complexity space complexity
// O(n2)        O(1)