findMinAndRemoveSorted = (array) => {
  return array.shift()
}

function merge(firstArray, secondArray) {
  let newArr = []
  while (firstArray.length > 0 && secondArray.length > 0) {
    if (firstArray[0] <= secondArray[0]) {
      newArr.push(findMinAndRemoveSorted(firstArray))
    } else {
      newArr.push(findMinAndRemoveSorted(secondArray))
    }
  }

  return newArr.concat(firstArray).concat(secondArray)
}

function mergeSort(array) {
  let sorted
  let midpoint = array.length/2
  let firsthalf = array.slice(0, midpoint)
  let secondhalf = array.slice(midpoint)

  if (array.length < 2) {
    return array
  } else {
    sorted = merge(mergeSort(firsthalf), mergeSort(secondhalf))
  }

  return sorted
}