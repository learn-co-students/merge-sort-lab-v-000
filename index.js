function findMinAndRemoveSorted(arr) {
  return arr.shift()
}

function merge(arr1, arr2) {
  let sorted = []
  while(arr1.length && arr2.length ) {
    if (arr1[0] <= arr2[0]) {
     sorted.push(findMinAndRemoveSorted(arr1))
   } else {
     sorted.push(findMinAndRemoveSorted(arr2))
   }
  }
  return sorted.concat(arr1, arr2)
}

function mergeSort(arr) {
  const length = arr.length
  if (length < 2) {
    return arr
  }
  const middle = Math.floor(length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}
