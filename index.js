function findMinAndRemoveSorted(arr){
  return arr.shift()
}

function merge(first, second) {
  let sorted = []
  while(first.length != 0 && second.length != 0) {
    if(first[0] < second[0]) {
      sorted.push(findMinAndRemoveSorted(first))
    } else {
      sorted.push(findMinAndRemoveSorted(second))
    }
  }
  return sorted.concat(first).concat(second)
}

function mergeSort(arr) {
  let midpoint = arr.length/2
  let firstHalf = arr.slice(0, midpoint)
  let secondHalf = arr.slice(midpoint, arr.length)
  let sorted = [];

  if (arr.length < 2) {
    return arr
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}