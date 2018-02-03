//Removes and returns the first value in the array
function findMinAndRemoveSorted(array) {
  return array.shift();
}

//While arrays are both not empty, if the first item in first array is smaller, add that value to sorted via previous function, or add value from second array. Return sorted with concat of first and second, which will be the leftovers of whichever array is longer.
function merge(firstSubArray, secondSubArray) {
  let sorted = [];

  while(firstSubArray.length != 0 && secondSubArray.length != 0) {
    if(firstSubArray[0] < secondSubArray[0]){
      sorted.push(findMinAndRemoveSorted(firstSubArray));
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray));
    }
  }
  return sorted.concat(firstSubArray).concat(secondSubArray);
}

//mergeSort will keeps splitting subarrays until they are single values, then merge them back up in order.
function mergeSort(array) {
  let midpoint = array.length/2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);
  let sorted;

  if(array.length < 2) {
    return array;
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  return sorted;
}
