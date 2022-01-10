function sumZero(arr){
    let left=0;
    let right=arr.length-1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum===0){
            return [arr[left],arr[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

sumZero([-3,,-1,0,2,3]) // return [-3,3]
sumZero([1,2,3]) // return undefined


function countUniqueValues(arr){
    let copyArr=[];

    for(let i=0; i< arr.length; i++){
       if(copyArr.length === 0){
           copyArr.push(arr[i]);
       }
    }
}
