function findMinAndRemoveSorted(array) {
    let minNum = array[0]
    let minIndex = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] < minNum){
        minNum = array[i]
        minIndex = i
        }
    }
    array.splice(minIndex, 1);
    return minNum;
}

function merge(array1, array2) {
    let sortedArray = [];
    while (array1.length != 0 && array2.length != 0) {
        if (array1[0] < array2[0]) {
            sortedArray.push(array1.shift())
        } else {
            sortedArray.push(array2.shift())
        }
    }
    return sortedArray.concat(array1).concat(array2);
}

function mergeSort(array) {
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    let sortedArray;
   
    if (array.length < 2) {
      return array
    } else {
      sortedArray = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sortedArray;
}