function findMinAndRemoveSorted(array) {
  let min = array[0];
  array.shift();
  return min;
}

function merge (a1, a2) {
  let sorted = []
  while (a1.length !== 0 && a2.length !==0) {
    if (a1[0] < a2[0]) {
      sorted.push(findMinAndRemoveSorted(a1))
    } else {
      sorted.push(findMinAndRemoveSorted(a2))
    }
  }
  return sorted.concat(a1).concat(a2)
}

function mergeSort (array) {
  if (array.length < 2) {
    return array
  } else {
    let mid = array.length/2
    let firstHalf = array.slice(0, mid)
    let secondHalf = array.slice(mid, array.length)
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}