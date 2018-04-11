function findMinAndRemoveSorted(sortedArray) {
  return sortedArray.shift();
}

function merge(sortedA1, sortedA2) {
  let merged = [];
  while (sortedA1.length > 0 && sortedA2.length > 0) {
    if (sortedA1[0] < sortedA2[0]) {
      merged.push(findMinAndRemoveSorted(sortedA1));
    } else {
      merged.push(findMinAndRemoveSorted(sortedA2));
    }
  }
  return merged.concat(sortedA1).concat(sortedA2)
}

function mergeSort(unsortedArray) {
  let midPoint = unsortedArray.length / 2;
  let first = unsortedArray.slice(0, midPoint);
  let second = unsortedArray.slice(midPoint, unsortedArray.length);
  let sorted;
  if (unsortedArray.length > 1) {
    sorted = merge(mergeSort(first), mergeSort(second));
  } else {
    return unsortedArray;
  }
  return sorted;
}
