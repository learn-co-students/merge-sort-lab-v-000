function findMinAndRemoveSorted(arr) {
  let min = arr[0];
  let minIdx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIdx = i;
    }
  }
  arr.splice(minIdx, 1);
  return min;
}

function merge(arr1, arr2) {
  let sorted = [];
  while (!!arr1.length && !!arr2.length) {
    arr1[0] < arr2[0] ? sorted.push(arr1.shift()) : sorted.push(arr2.shift());
  }
  return sorted.concat(arr1, arr2);
}

function mergeSort(arr) {
  let midpoint = arr.length / 2;
  let firstHalf = arr.slice(0, midpoint);
  let secondHalf = arr.slice(midpoint);
  if (arr.length < 2) {
    return arr;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
