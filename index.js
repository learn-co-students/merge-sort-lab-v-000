function findMinAndRemoveSorted(array) {
  let idx = 0;
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      idx = i
    }
  }
  array.splice(idx, 1)
  return min
}

function merge(firstSubArray, secondSubArray) {
  let sorted = [];

  while (firstSubArray.length !== 0 && secondSubArray.length !== 0) {
    if (firstSubArray[0]< secondSubArray[0]) {
      sorted.push(firstSubArray.shift())
    } else {
      sorted.push(secondSubArray.shift())
    }
  }
  return sorted.concat(firstSubArray).concat(secondSubArray)
}

function mergeSort(array) {
  let mid = array.length / 2;
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(left), mergeSort(right))
  }
}
