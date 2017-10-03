function findMinAndRemoveSorted(array) {
  return array.shift()
}

function merge(array1, array2) {
  let sorted = []  // Declare empty array to store results
  while(array1.length != 0 && array2.length != 0){ // Runs as long as there are any digits left in array1 and array2
    if(array1[0] < array2[0]){
      sorted.push(findMinAndRemoveSorted(array1)) // Pushes array1 into sorted array if it's smaller than array2
    } else {
      sorted.push(findMinAndRemoveSorted(array2)) // pushes array2 into sorted array if it's smaller than array1
    }
  }
  return sorted.concat(array1).concat(array2)
}

function mergeSort(array){
  let midpoint = array.length/2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)
  let sorted;

  if(array.length < 2){
    return array
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
