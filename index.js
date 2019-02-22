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
