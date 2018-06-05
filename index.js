function findMinAndRemoveSorted(array) {
    let min = array[0];
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }
    array = array.splice(minIndex, 1);
    return min;
}

function merge(firstArray, secondArray) {
    let sorted = [];
    let currMin;
    while (firstArray.length != 0 && secondArray.length != 0) {
        if (firstArray[0] <= secondArray[0]) {
            let currMin = findMinAndRemoveSorted(firstArray);
        } else {
            let currMin = findMinAndRemoveSorted(secondArray);
        }
        sorted.push(currMin);
    }
    console.log(firstArray);
    console.log(secondArray);
    return sorted.concat(firstArray).concat(secondArray);
}