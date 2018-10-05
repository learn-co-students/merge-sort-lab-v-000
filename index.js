function findMinAndRemoveSorted(myArray) {
    return myArray.shift();
}

function merge(firstSubarray, secondSubarray) {
    let sorted = [];
    while (firstSubarray.length != 0 && secondSubarray.length != 0) {

        if (firstSubarray[0] < secondSubarray[0]) {
            sorted.push(findMinAndRemoveSorted(firstSubarray))
        } else {
            sorted.push(findMinAndRemoveSorted(secondSubarray))
        }
    }
    return sorted.concat(firstSubarray).concat(secondSubarray)
}

function mergeSort(unsortedArray) {
    let middleIndex = unsortedArray.length / 2;
    let firstHalf = unsortedArray.slice(0, middleIndex);
    let secondHalf = unsortedArray.slice(middleIndex, unsortedArray.length)
    let sorted
    if (unsortedArray.length < 2) {
        return unsortedArray
    } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }

    return sorted
}

console.log(mergeSort( [12, 10, 9, 14, 1, 3, 5, 11, 6, 15, 16, 13, 2, 4, 8, 7]))