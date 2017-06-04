function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(firstSortedArray, secondSortedArray) {
  var sortedMerge = [];

  while (firstSortedArray.length > 0 && secondSortedArray.length > 0) {
    if (firstSortedArray[0] < secondSortedArray[0]) {
      sortedMerge.push(findMinAndRemoveSorted(firstSortedArray));
    } else {
      sortedMerge.push(findMinAndRemoveSorted(secondSortedArray));
    }
  }
  return sortedMerge.concat(firstSortedArray).concat(secondSortedArray);
}

function mergeSort(unsortedArray) {
  var midpoint = unsortedArray.length/2;
  if (unsortedArray.length < 2) {
    return unsortedArray;
  }
  return merge(mergeSort(unsortedArray.slice(0, midpoint)), mergeSort(unsortedArray.slice(midpoint, unsortedArray.length)));
}