function findMinAndRemoveSorted(array) {
  let currentMin = array[0];
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < currentMin) {
      currentMin = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1)
  return currentMin;
}

// let firstSubarray = [3, 4, 6, 7]
// let secondSubArray = [1, 2, 5, 8]

function merge(firstSubArray, secondSubArray) {
  let sortedArray = [];
  let currentMin;
  while (firstSubArray.length > 0 && secondSubArray.length > 0) {
    let firstHalfMin = firstSubArray[0];
    let secondHalfMin = secondSubArray[0];
    if (firstHalfMin < secondHalfMin) {
      sortedArray.push(findMinAndRemoveSorted(firstSubArray));
    } else {
      sortedArray.push(findMinAndRemoveSorted(secondSubArray));
    }
  }
  return sortedArray.concat(firstSubArray).concat(secondSubArray);
}

function mergeSort(array) {
  let midpoint = array.length/2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);
  if (array.length < 2) {
    return array;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
