
const findMinAndRemoveSorted = (array) => {
  return array.shift()
}

const merge = (firstSubarray, secondSubArray) => {
  let sorted = []
  while (firstSubarray.length != 0 && secondSubArray.length != 0) {
    if(firstSubarray[0] < secondSubArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstSubarray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray))
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}

const mergeSort = (array) => {
  let sorted = []
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if (array.length < 2) {
    return array
  } else {
    sorted = merge(mergeSort(firstSubarray),mergeSort(secondHalf))
  }
  return sorted
}
