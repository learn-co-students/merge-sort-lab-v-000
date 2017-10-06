function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(firstSubArray, secondSubArray) {
  // Declare empty array.
  let sorted = []
  // This loop will run as long as there are elements left in each subArray.
  while(firstSubArray.length != 0 && secondSubArray.length != 0) {
    if(firstSubArray[0] < secondSubArray[0]) {
      // Pushes firstSubArray into sorted array if it is smaller than secondSubArray.
      sorted.push(findMinAndRemoveSorted(firstSubArray))
    } else {
      // Pushes secondSubArray into sorted array if it is smaller than firstSubArray.
      sorted.push(findMinAndRemoveSorted(secondSubArray))
    }
  }
  return sorted.concat(firstSubArray).concat(secondSubArray)
}

function mergeSort(array) {
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  let sorted;

  // If the array is one element, it is already sorted.
  if(array.length < 2) {
    return array
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
