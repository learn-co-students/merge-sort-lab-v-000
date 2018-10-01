// Implement a function that first finds and removes the smallest element in a sorted array.
function findMinAndRemoveSorted(arr) {
    return arr.shift();
}

// Implement the merge function to combine two sorted arrays into one larger array.
function merge(arr1, arr2) {
    let sortedArr = [];

    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            sortedArr.push(findMinAndRemoveSorted(arr1));
        } else {
            sortedArr.push(findMinAndRemoveSorted(arr2));
        }
    }

    return sortedArr.concat(arr1).concat(arr2);
}

// Implement the mergeSort algorithm using the previous functions that you wrote.
function mergeSort(arr) {
    let midpoint = arr.length/2;
    let firstHalf = arr.slice(0, midpoint);
    let secondHalf = arr.slice(midpoint, arr.length);

    let sortedArr;

    if (arr.length < 2) {
        return arr;
    } else {
        sortedArr = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }

    return sortedArr;
}