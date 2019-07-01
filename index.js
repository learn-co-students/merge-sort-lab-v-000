
function findMinAndRemoveSorted(array) {
  return array.shift()
}


function merge(first, second) {
  let sorted = []
  while (first.length != 0 && second.length != 0) {
    if (first[0] < second[0]) {
      sorted.push(findMinAndRemoveSorted(first))
    } else {
      sorted.push(findMinAndRemoveSorted(second))
    }
  }

 return sorted.concat(first).concat(second)
}


function mergeSort(array) {
  let midpoint = array.length/2
  let first = array.slice(0, midpoint)
  let second = array.slice(midpoint, array.length)

  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(first), mergeSort(second))
  }
}
