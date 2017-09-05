function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(array1, array2) {
  const sorted = [];

  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] < array2[0]) {
      sorted.push(findMinAndRemoveSorted(array1));
    } else {
      sorted.push(findMinAndRemoveSorted(array2));
    }
  }

  return sorted.concat(array1).concat(array2);
}

function mergeSort(unsorted) {
  if (unsorted.length == 1) return unsorted;

  const midpoint = unsorted.length / 2;
  const firstHalf = unsorted.slice(0, midpoint);
  const secondHalf = unsorted.slice(midpoint, unsorted.length);
  
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}