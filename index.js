function findMinAndRemoveSorted(array){
    return(array.shift())
}

function merge(firstArray, secondArray){
    let mergedArray = []
    let firstMin, secondMin

    while (0 != firstArray.length && 0 != secondArray.length){
        firstMin = firstArray[0]
        secondMin = secondArray[0]
        mergedArray.push(firstMin < secondMin ?
            findMinAndRemoveSorted(firstArray) :
            findMinAndRemoveSorted(secondArray)
        )
    }

    return mergedArray.concat(firstArray).concat(secondArray)
}

function mergeSort(array){
    if (1 === array.length){
        return array
    }

    else {
        const midpoint = array.length / 2
        const firstHalf = array.slice(0, midpoint)
        const secondHalf = array.slice(midpoint, array.length)

        return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}
