function findMinAndRemoveSorted(array){
    return array.shift()
}

function merge(first, second){
    let sorted = []
    let currentMin;

    while(first.length !=0 && second.length != 0){
        if (first[0] < second[0]) {
            sorted.push(findMinAndRemoveSorted(first))
        } else {
            sorted.push(findMinAndRemoveSorted(second))
        }
    }

    return sorted.concat(first).concat(second)
}

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sorted;

    // If our array is one element, it is already sorted
    if (array.length < 2) {
        return array
    } else {
        sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }

    return sorted
}