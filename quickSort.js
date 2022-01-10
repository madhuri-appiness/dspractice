const quickSort = array => {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (const el of array.slice(0, array.length - 1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el);
    }

    if (leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    }
    else if (leftArr.length > 0) {
        return [...quickSort(leftArr), pivot]
    } else {
        return [pivot, ...quickSort(rightArr)]
    }
}

const arr = [1, 4, 2, 6, 8, 345, 123, 43, 32, 5674, 2345, 2, 9];

console.log(quickSort(arr));

// complexity O(nlogn) worst O(n2)