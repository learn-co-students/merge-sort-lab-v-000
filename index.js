function findMinAndRemoveSorted(array) {
  let min = array[0]
  let minIndex = 0
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function findAndRemove(firstArray, secondArray) {
  let firstMin = firstArray[0]
  let secondMin = secondArray[0]
  if (firstMin < secondMin) {
    return firstArray.shift()
  } else {
    return secondArray.shift()
  }
}

function merge(firstArray, secondArray) {
  let sortedArray = []
  while (firstArray.length !== 0 && secondArray.length !== 0) {
    let currentMin = findAndRemove(firstArray, secondArray)
    sortedArray.push(currentMin)
  }
  return sortedArray.concat(firstArray).concat(secondArray)
}

function mergeSort(array) {
  let midpoint = array.length / 2
  let firstArray = array.slice(0, midpoint)
  let secondArray = array.slice(midpoint)
  if (array.length < 2) {
    return array
  }
  return merge(mergeSort(firstArray), mergeSort(secondArray))
}
