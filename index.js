
const findMinAndRemoveSorted = arr => {
    const minVal = arr[0];
    arr.splice(0,1);
    return minVal;
}

function merge(firstArray, secondArray) {
    const sortedArr = [];

    while (firstArray.length > 0 && secondArray.length > 0){
        firstArray[0] < secondArray[0] ? sortedArr.push(findMinAndRemoveSorted(firstArray)) : sortedArr.push(findMinAndRemoveSorted(secondArray));
    }

    return sortedArr.concat(firstArray).concat(secondArray);
}

function mergeSort(array) {
    let midpoint = array.length / 2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    return array.length < 2 ? array : merge(mergeSort(firstHalf), mergeSort(secondHalf))
}