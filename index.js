let findMinAndRemoveSorted = (array) => {
  return array.shift();
}

let merge = (firstArray, secondArray) => {
  let sorted = [];
  while(firstArray.length != 0 && secondArray.length != 0) {
    if (firstArray[0] < secondArray[0]) {
      sorted.push(findMinAndRemoveSorted(firstArray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondArray))
    }
  }
  return sorted.concat(firstArray).concat(secondArray)
}

let mergeSort = (array) => {
  let mid = array.length / 2
  let firstHalf = array.slice(0, mid)
  let secondHalf = array.slice(mid, array.length)

  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
