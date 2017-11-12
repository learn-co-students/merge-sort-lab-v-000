function findMinAndRemoveSorted(array) {
  let min = array[0]
  array.splice(0, 1)
  return min
}

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  let middleIndex = array.length / 2
  let firstHalf = array.slice(0, middleIndex)
  let secondHalf = array.slice(middleIndex)
  return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}

function merge(firstHalf, secondHalf) {
  let sortedArray = []
  let minElement;
  while (firstHalf.length && secondHalf.length) {
    if(firstHalf[0] < secondHalf[0]) {
      minElement = findMinAndRemoveSorted(firstHalf)
      
    } else {
      minElement = findMinAndRemoveSorted(secondHalf)
      
    }
    sortedArray.push(minElement)
  }
  return sortedArray.concat(firstHalf).concat(secondHalf)
}
