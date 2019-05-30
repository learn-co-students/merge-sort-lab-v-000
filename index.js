function findMinAndRemoveSorted(array) {          // 2, 3, 4, 5, 6, 7]
  let min = array[0]
  let minIndex = 0

  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i]

    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }

  array.splice(minIndex, 1);
  return min;
}

function merge(firstSubArray, secondSubArray) {
  let sorted = []
  let currentMin;

  while (firstSubArray.length != 0 && secondSubArray.length != 0) {
      if (firstSubArray[0] < secondSubArray[0]) {
        let currentMin = firstSubArray.shift()

        sorted.push(currentMin)
      } else if (firstSubArray[0] > secondSubArray[0]) {
        let currentMin = secondSubArray.shift()

        sorted.push(currentMin)
      }
  }

  return sorted.concat(firstSubArray).concat(secondSubArray)
}

function mergeSort(array) {
  let midpoint = array.length / 2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)

  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
