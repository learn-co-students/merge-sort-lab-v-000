
// need a function that find and removes the smallest element from a sorted array
function findMinAndRemoveSorted(array) {
    return array.shift()
}

// need a function that will merge two sorted arrays and return one
function merge(firstHalf, secondHalf) {
    // will need one new sorted array to eventually return to the user
    let sortedArr = []

    // as long as there are values in the array we need to keep comparing the first 
    while (firstHalf.length != 0 && secondHalf.length != 0) {
        if (firstHalf[0] < secondHalf[0]) {
            sortedArr.push(findMinAndRemoveSorted(firstHalf))
        } else {
            sortedArr.push(findMinAndRemoveSorted(secondHalf))
        }
    }
    return sortedArr.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array) {
    let midPoint = array.length/2
    let firstHalf = array.slice(0, midPoint)
    let secondHalf = array.slice(midPoint, array.length)
    let sortedArr

    if (array.length < 2) {
        return array 
    } else {
        sortedArr = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sortedArr
}