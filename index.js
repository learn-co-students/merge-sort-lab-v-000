function findMinAndRemoveSorted(sortedArray ) {
  return sortedArray.shift()
}

function merge(arr1, arr2) {
  let sorted = []
  while(arr1.length && arr2.length ) {
    if (arr1[0] <= arr2[0]) {
     sorted.push(arr1.shift())
   } else {
     sorted.push(arr2.shift())
   }
  }
  return sorted.concat(arr1,arr2)
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const length = array.length;
  const middle = Math.floor(length/2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)

  return merge(mergeSort(left), mergeSort(right));
}
