function findMinAndRemoveSorted(arr) {
  return arr.shift()
}

function merge(arr1, arr2) {
  let sorted = []
  while (arr1.length && arr2.length) {
    arr1[0] < arr2[0]
      ? sorted.push(findMinAndRemoveSorted(arr1))
      : sorted.push(findMinAndRemoveSorted(arr2))
  }
  return [...sorted, ...arr1, ...arr2]
}

function mergeSort(arr) {
  let midIndex = arr.length / 2
  let l = arr.slice(0, midIndex)
  let r = arr.slice(midIndex)
  let sorted = []

  if (arr.length === 1) {
    return arr
  } else {
    sorted = merge(mergeSort(l), mergeSort(r))
  }

  return sorted
}
