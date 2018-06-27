
function findMinAndRemoveSorted(array) {
  const min = array[0];
  array.shift();
  return min;
}

// merges 2 sorted arrays to produce 1 sorted array
function merge(arr1, arr2) {
  let sorted = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift())
    } else {
      sorted.push(arr2.shift())
    }
  }

  return sorted.concat(arr1).concat(arr2);

}

// sorts an unsorted array
function mergeSort(array) {
    let midPoint = Math.floor(array.length / 2)

    let firstHalf = array.slice(0, midPoint)
    let secondHalf = array.slice(midPoint, array.length)

    if (array.length < 2) {
      return array; // already sorted
    } else {
      return merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
}
