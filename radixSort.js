
function getDigit(num,i){
    return Math.floor(Math.abs(num)/ Math.pow(10,i)) % 10;
}

function digitCount(num){
    if(num=== 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1;
}

function mostMaxDigitsArr(nums){
    let maxDigit=0;
    for(let i=0; i<nums.length; i++){
        maxDigit = Math.max(maxDigit,digitCount(nums[i]))
    }
    return maxDigit;
}

function radixSort(arr){
    let maxDigitCount = mostMaxDigitsArr(arr);

    for(let k=0; k< maxDigitCount; k++){
        let digitBucket = Array.from({length:10},()=>[]);
        for(let i=0; i< arr.length; i++){
            let digit = getDigit(arr[i],k);
            digitBucket[digit].push(arr[i]);
        }
        arr = [].concat(...digitBucket)
    }
    console.log(arr);
    return arr;
}

radixSort([123,4,56,789623,45,899])


// sort through digit count from base 10 in all buckets