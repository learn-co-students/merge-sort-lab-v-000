function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
        minIndex = i;
      }
    }
    array.splice(minIndex, 1);
    return min;
}

function merge(firstArray, secondArray) {
  let newMin
  let sorted = []
  while (firstArray.length !== 0 && secondArray.length !== 0) {
    if (firstArray[0] < secondArray[0]) {
      newMin = findMinAndRemoveSorted(firstArray)
      sorted.push(newMin)
    } else {
      newMin = findMinAndRemoveSorted(secondArray)
      sorted.push(newMin)
    }
  }
  return sorted.concat(firstArray).concat(secondArray)
}

function mergeSort(array){
  if (array.length < 2) return array;
    let midpoint = Math.floor(array.length / 2);
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)

    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
