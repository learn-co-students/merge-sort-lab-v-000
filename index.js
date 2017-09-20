function findMinAndRemoveSorted(array) {
    var min = array[0],
        indexOfMin = 0;

    for (let i = 0; i < array.length; i++) {
        var currentItem = array[i]
        if (array[i] < min) {
            min = array[i]
            indexOfMin = i
        }
    }
    array.splice(indexOfMin, 1);
    return min;
}

function merge(firstHalf, secondHalf) {
    // create two vars: one to hold the new sorted array & one for the current minimum
    var sorted = [],
        currentMin;

    // while the arrays are not empty
    while (firstHalf.length != 0 && secondHalf.length != 0) {
        // make the currentMin var equal to the function of #findMinAndRemoveTwoArrays
        var currentMin = findMinAndRemoveTwoArrays(firstHalf, secondHalf)
            // push the currentMin var into the new sorted array
        sorted.push(currentMin)
    }
    // return sorted, concatenated with the remaining value of either firstHalf or secondHalf
    return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array) {
    let midpoint = array.length / 2
    let firstArray = array.slice(0, midpoint)
    let secondArray = array.slice(midpoint)
    if (array.length < 2) {
        return array
    }
    return merge(mergeSort(firstArray), mergeSort(secondArray))
}

// helper method for #merge
function findMinAndRemoveTwoArrays(firstHalf, secondHalf) {
    // identify the minimums of both arrays
    var minfirstHalf = firstHalf[0],
        minsecondHalf = secondHalf[0]

    // if the minumum of first array is less than the second array's minimum
    if (minfirstHalf < minsecondHalf) {
        // return that value and remove it from the first array
        return firstHalf.shift()
    } else {
        // if not, return the min from the second array & remove it from the second array
        return secondHalf.shift()
    }
}