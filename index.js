function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(firstArray, secondArray) {
  let sorted = [];
  let currentMin;
  while (firstArray.length != 0 && secondArray.length != 0) {
    if (firstArray[0] < secondArray[0]) {
      currentMin = findMinAndRemoveSorted(firstArray)
    } else {
      currentMin = findMinAndRemoveSorted(secondArray)
    }
    sorted.push(currentMin);
  }
  return sorted.concat(firstArray).concat(secondArray);
}

function mergeSort(array) {
  let sorted;
  let midpoint = array.length / 2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);
  if (array.length < 2) {
    return array
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
