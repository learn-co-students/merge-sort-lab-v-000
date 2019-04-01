
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

const mergeSort = () => {
  
}
