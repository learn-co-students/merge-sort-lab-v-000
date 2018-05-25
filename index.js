function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;

  array.splice(minIndex, 1);
  return min;
}

function merge(firstSubarray, secondSubArray) {
  let c = [];

  if (firstSubarray.length === 1 && secondSubArray.length === 1) {

    if (firstSubarray[0] < secondSubArray[0]) {
      return [firstSubarray[0], secondSubArray[0]];
    } else {
      return [secondSubArray[0], firstSubarray[0]];
    }

  } else if (firstSubarray.length === 0) {
    return secondSubArray;
  } else if (secondSubArray.length === 0) {
    return firstSubarray;
  } else {
    
    if (firstSubarray[0] < secondSubArray[0]) {
      c = findMinAndRemoveSorted(firstSubarray);
      return [c].concat( merge(firstSubarray, secondSubArray) );
    } else {
      c = findMinAndRemoveSorted(secondSubArray);
      return [c].concat( merge(firstSubarray, secondSubArray) );
    }

  }
}

function mergeSort(unsorted) {
  let midpoint = unsorted.length/2;
  let firstHalf = unsorted.slice(0, midpoint);
  let secondHalf = unsorted.slice(midpoint, unsorted.length);

  if (unsorted.length < 2) {
    return unsorted;
  } else {

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}