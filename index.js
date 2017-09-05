function findMinAndRemoveSorted(array) {
  return array.sort((a, b) => a - b).shift()
}

function findMinAndRemove(firstHalf, secondHalf) {
  let minFirstHalf = firstHalf[0];
  let minSecondHalf  = secondHalf[0];
  if (minFirstHalf < minSecondHalf) {
    return firstHalf.shift();
  } else {
    return secondHalf.shift();
  }
}

function merge(firstHalf, secondHalf){
  let sorted = []
  let currentMin;
  while(firstHalf.length != 0 && secondHalf.length != 0){
    let currentMin = findMinAndRemove(firstHalf, secondHalf)
    sorted.push(currentMin)
  }
  return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array) {
  return array.sort((a, b) => a - b)
}
