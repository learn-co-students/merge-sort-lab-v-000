function findMinAndRemoveSorted(array) {
    let min = array[0];
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
        array.shift(min)
    }
    return min
}

function merge(firstSubArray, secondSubArray) {
    let merged = [];
    let currentMin;
   
    while (firstSubArray.length != 0 && secondSubArray != 0) {
        let minFirstSubArray = firstSubArray[0];
        let minSecondSubArray = secondSubArray[0];

        if(minFirstSubArray < minSecondSubArray){
        currentMin = minFirstSubArray
        firstSubArray.shift()
        } else {
        currentMin = minSecondSubArray
        secondSubArray.shift()
        }

        merged.push(currentMin)
    }

    return merged.concat(firstSubArray).concat(secondSubArray)
  }

function mergeSort(array) {

        let midpoint = array.length/2
        let firstHalf = array.slice(0, midpoint)
        let secondHalf = array.slice(midpoint, array.length)

        if (array.length < 2) {
            return array
        } else {
           return merge(mergeSort(firstHalf), mergeSort(secondHalf))
        }
}