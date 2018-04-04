function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(firstSubarray, secondSubArray) {
  let sorted = [];
  while(firstSubarray.length !== 0 && secondSubArray.length !== 0) {
    if (firstSubarray[0] < secondSubArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstSubarray));
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray));
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}

function mergeSort(unsorted) {
  let median = unsorted.length/2,
      firstHalf = unsorted.slice(0, median),
      secondHalf = unsorted.slice(median, unsorted.length),
      sorted;
  if (unsorted.length < 2) {
    return unsorted;
  } else {
     sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted;
}
