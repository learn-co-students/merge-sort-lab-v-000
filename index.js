function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(firstSubarray, secondSubArray) {
  let sortedArray = [];
  while (firstSubarray.length > 0 && secondSubArray.length > 0) {
    if (firstSubarray[0] < secondSubArray[0]) {
      sortedArray.push(findMinAndRemoveSorted(firstSubarray));
    } else {
      sortedArray.push(findMinAndRemoveSorted(secondSubArray));
    }
  }
  return sortedArray.concat(firstSubarray).concat(secondSubArray);
}

function mergeSort(array) {
  let sorted;
  let midPoint = array.length / 2;
  let firstHalf = array.slice(0, midPoint);
  let secondHalf = array.slice(midPoint, array.length);

  if (array.length < 2) {
    return array;
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf));
    return sorted;
  }
}
