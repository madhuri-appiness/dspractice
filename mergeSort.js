const mergeArr = (leftArr, rightArr) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        let leftEl = leftArr[leftIndex];
        let rightEl = rightArr[rightIndex];
        // console.log(leftEl);


        if (leftEl < rightEl) {
            result.push(leftEl);
            leftIndex++;
        } else {
            result.push(rightEl);
            rightIndex++;
        }
    }
    return [...result, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}


mergeSortArr = arr => {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);


    return mergeArr(mergeSortArr(leftArr), mergeSortArr(rightArr));
}

console.log(mergeSortArr([8,1, 2, 6]))

//complexity O(nlogn)