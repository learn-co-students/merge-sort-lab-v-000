function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(firstArray, secondArray) {
  let combinedArray = []
  let min

  while (firstArray.length > 0 && secondArray.length > 0 ) {
  if (firstArray[0] < secondArray[0]) {
   min = firstArray.shift()
  }
  else {
    min = secondArray.shift()
  }

  combinedArray.push(min)
}

  return combinedArray.concat(firstArray, secondArray)
}

function mergeSort(array) {

  if (array.length < 2) {

    return array
  }
  
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)



  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}
