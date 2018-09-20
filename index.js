function findMinAndRemoveSorted(array) {
    return array.shift()
}

function merge(array1, array2) {
    let sorted = []
    while(array1.length != 0 && array2.length != 0) {
        if(array1[0] > array2[0]) {
            sorted.push(findMinAndRemoveSorted(array2))
        } else {
            sorted.push(findMinAndRemoveSorted(array1))
        }
    }
    return sorted.concat(array1).concat(array2)
}

function mergeSort(array) {
    let midpoint = array.length/2;
    let firstHalf = array.slice(0, midpoint);
    let secondHalf = array.slice(midpoint, array.length);

    if (array.length < 2) {
        return array
    } else {
        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }

}
