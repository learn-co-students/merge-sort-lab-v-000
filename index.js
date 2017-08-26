function findMinAndRemoveSorted(arr) {
  return arr.shift()
}

function merge(firstHalf, secondHalf) {
  let sorted = [];

  while (firstHalf.length != 0 && secondHalf.length != 0) {
    if (firstHalf[0] < secondHalf[0]) {
      sorted.push(findMinAndRemoveSorted(firstHalf));
    } else {
      sorted.push(findMinAndRemoveSorted(secondHalf));
    }
  }
  return sorted.concat(firstHalf).concat(secondHalf);
}

function mergeSort(arr) {
  let midPoint = arr.length / 2,
      firstHalf = arr.slice(0, midPoint),
      secondHalf = arr.slice(midPoint);
      
  if (arr.length < 2) {
    return arr;
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
