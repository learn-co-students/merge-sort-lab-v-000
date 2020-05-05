function findMinAndRemoveSorted(array) {
  let min = array[0];
  let minIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }

  array.splice(minIndex, 1);
  return min;
}

function merge(firstSubArray, secondSubArray) {
  let sorted = [];

  while (firstSubArray.length != 0 && secondSubArray.length != 0) {
    if (firstSubArray[0] < secondSubArray[0]) {
      sorted.push(firstSubArray[0]);
      findMinAndRemoveSorted(firstSubArray);
    } else {
      sorted.push(secondSubArray[0]);
      findMinAndRemoveSorted(secondSubArray);
    };
  };
  return sorted.concat(firstSubArray).concat(secondSubArray);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let midpoint = array.length / 2;
    let firstHalf = array.slice(0, midpoint);
    let secondHalf = array.slice(midpoint, array.length);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  };
}
