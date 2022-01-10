const selectionSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }

    return arr;
}

const array = [1, 4, 2, 6, 8, 345, 123, 43, 32, 0, 5, 78, 5674, 2345, 2, 9];
console.log(selectionSort(array))

//complexity space complexity
// O(n2)            O(1)